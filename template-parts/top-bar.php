<?php if(get_field('enable_top_bar', 'option')) {
	$background_color = get_field('top_bar_background_color', 'option');
	$text_color = get_field('top_bar_text_color', 'option');
	?>
	<div class="top_bar" style="background-color: <?php echo esc_attr($background_color); ?>; color: <?php echo esc_attr($text_color); ?>">
		<div class="top_bar_inner c-wide">
			<?php echo wp_kses_post(get_field('top_bar_message', 'option')); ?>
			<?php
			$cta_link = get_field('cta_link', 'option');
			if( $cta_link ):
				$cta_link_url = $cta_link['url'];
				$cta_link_title = $cta_link['title'];
				$cta_link_target = $cta_link['target'] ? $cta_link['target'] : '_self';
				?>
				<a  style="color: <?php echo $text_color; ?>" href="<?php echo esc_url( $cta_link_url ); ?>" target="<?php echo esc_attr( $cta_link_target ); ?>">
					<?php echo esc_html( $cta_link_title ); ?>
				</a>
			<?php endif; ?>
		</div>
	</div>
<?php } ?>
