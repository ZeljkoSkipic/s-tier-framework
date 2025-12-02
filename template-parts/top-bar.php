<?php if(get_field('enable_top_bar', 'option')) { ?>
	<div class="top_bar" style="background-color: <?php echo get_field('top_bar_background_color', 'option'); ?>; color: <?php echo $text_color; ?>">
		<div class="top_bar_inner c-wide">
			<?php echo get_field('top_bar_message', 'option'); ?>
			<?php
			$cta_link = get_field('cta_link', 'option');
			if( $cta_link ):
				$cta_link_url = $cta_link['url'];
				$cta_link_title = $cta_link['title'];
				$cta_link_target = $cta_link['target'] ? $cta_link['target'] : '_self';
				?>
				<a  style="color: <?php echo $text_color; ?>" href="<?php echo esc_url( $cta_link_url ); ?>" target="<?php echo esc_attr( $cta_link_target ); ?>">
					<?php echo esc_html( $cta_link_title ); ?>
					<svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 13L7.5 7L1.5 1" stroke="<?php echo $text_color; ?>" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
				</a>
			<?php endif; ?>
		</div>
	</div>
<?php } ?>
