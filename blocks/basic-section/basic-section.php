<?php
$layout = get_field_object('layout');
$stack = get_field_object('stack');

$padding = get_field_object('padding');

$class = 'st_block st_section';
if ( ! empty( $block['className'] ) ) {
    $class .= ' ' . $block['className'];
}

if ( ! empty( $padding) ) {
    $class .=  ' ' . $padding['value'];
}

$sec_in_class = 'st_section_inner container';
if ( ! empty( $layout ) ) {
    $sec_in_class .=  ' ' . $layout['value'];
}

if ( ! empty( $stack ) ) {
    $sec_in_class .=  ' ' . $stack['value'];
}

?>

<section class="<?php echo $class; ?>">
	<?php get_template_part('components/background'); ?>
	<div class="<?php echo $sec_in_class ?>">
		<?php
		$title = get_field('title');
		$text = get_field('text'); ?>

		<div class="left">
			<h2 class="st_section_title"><?php echo $title; ?></h2>
			<div class="st_section_text"><?php echo $text ?></div>
			<?php get_template_part('components/buttons'); ?>
		</div>

		<div class="right">
			<?php
			$image = get_field('image');
			$size = 'full';
			if( $image ) {
				echo wp_get_attachment_image( $image, $size, "", array( "class" => "image" ) );
			} ?>
		</div>
	</div>
</section>
