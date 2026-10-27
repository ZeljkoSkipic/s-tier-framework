<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package s-tier
 */

get_header();
?>

	<main id="primary" class="site-main space_1">
		<div class="container">
			<?php
			$queried = get_queried_object();
			if ( is_post_type_archive() ) {
				$page_title = post_type_archive_title( '', false );
			} elseif ( is_archive() ) {
				$page_title = get_the_archive_title();
			} elseif ( $queried instanceof WP_Post ) {
				$page_title = get_the_title( $queried );
			} else {
				$page_title = get_post_type_object( get_query_var( 'post_type' ) ?: 'post' )->labels->name;
			}
			?>
			<h1 class="title-1"><?php echo esc_html( $page_title ); ?></h1>
			<?php
			if ( have_posts() ) : ?>
				<div class="archive_posts posts_grid space_2">
					<?php while ( have_posts() ) :
						the_post();
						get_template_part( 'template-parts/content', get_post_type() );
					endwhile; ?>
				</div>
				<div class="container blog_pagination space_2_0">
					<?php the_posts_pagination(); ?>
				</div>

			<?php endif; ?>
		</div>
	</main><!-- #main -->

<?php
get_footer();
