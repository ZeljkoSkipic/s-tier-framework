<?php
$padding = get_field('padding');
$cols = get_field('columns');
$tab_cols = get_field('tab_columns');
$mob_cols = get_field('mob_columns');

$anchor = '';
if ( ! empty( $block['anchor'] ) ) {
    $anchor = 'id="' . esc_attr( $block['anchor'] ) . '" ';
}

$class = 'st_block st_info_boxes';
if ( ! empty( $block['className'] ) ) {
    $class .= ' ' . $block['className'];
}

if ( ! empty( $padding) ) {
    $class .=  ' ' . $padding;
}

if ( ! empty( $cols ) ) {
    $class .=  ' ' . $cols;
}
if ( ! empty( $tab_cols ) ) {
    $class .=  ' ' . $tab_cols;
}
if ( ! empty( $mob_cols ) ) {
    $class .=  ' ' . $mob_cols;
}

?>

<section <?php echo $anchor; ?> class="<?php echo esc_attr( $class ); ?>">
<?php get_template_part('components/background'); ?>
	<div class="container">
		<?php get_template_part('components/intro'); ?>
        <div class="st_info_boxes_inner">
        <?php
            // Columns repeater
            if( have_rows('info_boxes') ):

                while( have_rows('info_boxes') ) : the_row();

				$title = get_sub_field('title');
                $text = get_sub_field('text');
				$ib_image = get_sub_field('ib_image');
				$icon = get_sub_field('icons_test');
                $size = 'full'; ?>

                <div class="st_info_box">
					<?php
					if( $ib_image ) { ?>
					<figure class="ib_image">
						<?php echo wp_get_attachment_image( $ib_image, $size, "", array( "class" => "ib_image" ) ); ?>
					</figure>

					<?php } else { ?>
						<figure class="ib_icon">
							<?php echo $icon; ?>
						</figure>
					<?php } ?>
                   <h3 class="ib_title"><?php echo $title; ?></h3>
                    <div class="ib_text">
                        <?php echo $text; ?>
                    </div>
                    <?php
					$ib_button = get_sub_field('ib_button');
					if( $ib_button ):
						$link_url = $ib_button['url'];
						$link_title = $ib_button['title'];
						$link_target = $ib_button['target'] ? $ib_button['target'] : '_self';
						?>
						<a class="ib_button btn-1" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>"><?php echo esc_html( $link_title ); ?></a>
					<?php endif; ?>
                </div>
                <?php endwhile;
            endif; ?>
        </div>
	</div>
</section>
