<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package s-tier
 */

?>

	<footer id="colophon" class="site-footer">
		<div class="container">
			<div class="footer_main">
				<div class="col">
					<?php the_custom_logo(); ?>
				</div>
				<div class="col">
					<?php $footer_menu_1 = wp_get_nav_menu_object( get_nav_menu_locations()['footer_1'] ?? 0 ); ?>
					<p class="footer_menu_title"><?php echo $footer_menu_1 ? esc_html( $footer_menu_1->name ) : ''; ?></p>
					<?php wp_nav_menu( [
						'theme_location' => 'footer_1',
						'menu_id' => 'footer_menu_1',
						'menu_class' => 'footer_menu_1'
					] ); ?>
				</div>
				<div class="col">
					<?php $footer_menu_2 = wp_get_nav_menu_object( get_nav_menu_locations()['footer_2'] ?? 0 ); ?>
					<p class="footer_menu_title"><?php echo $footer_menu_2 ? esc_html( $footer_menu_2->name ) : ''; ?></p>
					<?php wp_nav_menu( [
						'theme_location' => 'footer_2',
						'menu_id' => 'footer_menu_2',
						'menu_class' => 'footer_menu_2'
					] ); ?>
				</div>
			</div>
			<div class="footer_bottom">
				© <?php echo date('Y'); ?> <?php bloginfo(); ?>
			</div>
		</div>
	</footer>
</div><!-- #page -->

<?php wp_footer(); ?>
<!--
	         (__)
     `\------(oo)
       ||    (__) <(What are you looking for?)
       ||w--||
-->
<?php echo get_field('body_bottom_script', 'option'); ?> <!-- Body Bottom External Code -->
</body>
</html>
