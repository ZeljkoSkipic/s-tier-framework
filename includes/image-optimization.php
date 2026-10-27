<?php
/**
 * Force WordPress's image editor to save JPG/PNG thumbnails as WebP instead,
 * so no .jpg/.png subsizes are generated at all.
 */
add_filter( 'image_editor_output_format', 'my_force_webp_thumbnails', 10, 3 );

function my_force_webp_thumbnails( $output_format, $filename, $mime_type ) {
    if (
        in_array( $mime_type, array( 'image/jpeg', 'image/png' ), true ) &&
        wp_image_editor_supports( array( 'mime_type' => 'image/webp' ) )
    ) {
        $output_format[ $mime_type ] = 'image/webp';
    }

    return $output_format;
}

/**
 * Scale uploads only when their width exceeds 1920px.
 * Preserve the aspect ratio and allow heights above 1920px.
 */
add_filter( 'big_image_size_threshold', 'my_set_big_image_threshold', 10, 2 );

function my_set_big_image_threshold( $threshold, $imagesize ) {
    $max_width = 1920;
    $width     = (int) $imagesize[0];
    $height    = (int) $imagesize[1];

    // Do not resize based on height alone.
    if ( $width <= $max_width ) {
        return false;
    }

    // WordPress constrains both dimensions to the returned threshold.
    // For portrait images, use the proportional target height.
    return (int) round(
        $max_width * max( $width, $height ) / $width
    );
}

/**
 * Remove the '-scaled' suffix WordPress adds to the scaled-down image filename,
 * e.g. '7-scaled.webp' becomes '7.webp'.
 *
 * Runs before my_convert_uploaded_image_to_webp() so the WebP conversion below
 * operates on the final, un-suffixed filename.
 */
add_filter( 'wp_generate_attachment_metadata', 'my_remove_scaled_suffix', 10, 2 );

function my_remove_scaled_suffix( $metadata, $attachment_id ) {
    if ( empty( $metadata['file'] ) || false === strpos( $metadata['file'], '-scaled.' ) ) {
        return $metadata;
    }

    $file = get_attached_file( $attachment_id );
    if ( ! $file || ! file_exists( $file ) ) {
        return $metadata;
    }

    $new_file = str_replace( '-scaled.', '.', $file );

    // Bail if a file already exists at the destination, to avoid overwriting it.
    if ( file_exists( $new_file ) || ! rename( $file, $new_file ) ) {
        return $metadata;
    }

    $metadata['file'] = str_replace( '-scaled.', '.', $metadata['file'] );
    update_attached_file( $attachment_id, $new_file );

    return $metadata;
}

/**
 * Generate a WebP version of the originally uploaded JPG/PNG file and point
 * the attachment at it, so the full-size image is served as WebP too.
 * (Subsizes are already handled by the image_editor_output_format filter above.)
 *
 * The original JPG/PNG is kept on disk (for wp-admin's "Restore original
 * image" option) but is no longer referenced anywhere WordPress serves from.
 */
add_filter( 'wp_generate_attachment_metadata', 'my_convert_uploaded_image_to_webp', 20, 2 );

function my_convert_uploaded_image_to_webp( $metadata, $attachment_id ) {
    $file = get_attached_file( $attachment_id );
    if ( ! $file || ! file_exists( $file ) ) {
        return $metadata;
    }

    $mime_type = wp_check_filetype( $file )['type'];
    if ( ! in_array( $mime_type, array( 'image/jpeg', 'image/png' ), true ) ) {
        return $metadata;
    }

    if ( ! wp_image_editor_supports( array( 'mime_type' => 'image/webp' ) ) ) {
        return $metadata;
    }

    $webp_file = my_generate_webp_version( $file );
    if ( ! $webp_file ) {
        return $metadata;
    }

    // Point the attachment at the WebP file instead of the JPG/PNG.
    update_attached_file( $attachment_id, $webp_file );
    wp_update_post( array(
        'ID'             => $attachment_id,
        'post_mime_type' => 'image/webp',
    ) );

    $metadata['file'] = _wp_relative_upload_path( $webp_file );

    return $metadata;
}

/**
 * Saves a WebP copy alongside the given JPG/PNG file path.
 *
 * @return string|false Path to the new WebP file, or false on failure.
 */
function my_generate_webp_version( $file_path ) {
    if ( ! file_exists( $file_path ) ) {
        return false;
    }

    $editor = wp_get_image_editor( $file_path );
    if ( is_wp_error( $editor ) ) {
        return false;
    }

    $destination = preg_replace( '/\.(jpe?g|png)$/i', '.webp', $file_path );

    $saved = $editor->save( $destination, 'image/webp' );

    return is_wp_error( $saved ) ? false : $saved['path'];
}
