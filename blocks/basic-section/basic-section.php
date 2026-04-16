<?php
$layout = get_field('layout');
$stack = get_field('stack');

$sec_in_class = 'st_section_inner container';
if ( ! empty( $layout ) ) {
    $sec_in_class .= ' ' . $layout;
}
if ( ! empty( $stack ) ) {
    $sec_in_class .= ' ' . $stack;
}
?>
<section <?php echo stier_block_attrs( $block, 'st_section' ); ?>>
	<?php get_template_part('components/background'); ?>
	<div class="<?php echo $sec_in_class ?>">
		<?php
		$title = get_field('title');
		$text = get_field('text'); ?>

		<div class="left">
			<h2 class="st_section_title"><?php echo $title; ?></h2>
			<div class="st_section_text"><?php echo $text ?></div>
			<?php
			$button = get_field('button');
			if( $button ):
				$link_url = $button['url'];
				$link_title = $button['title'];
				$link_target = $button['target'] ? button['target'] : '_self';
				?>
				<a class="basis_sec_btn btn-1" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>"><?php echo esc_html( $link_title ); ?></a>
			<?php endif; ?>
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
