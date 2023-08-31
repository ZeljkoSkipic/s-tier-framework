<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package stier
 */

get_header();
?>

	<main id="primary" class="site-main">
		<div class="post_intro inner_hero">
			<div class="container">
				<?php
				the_title( '<h1 class="title-1">', '</h1>' );
				the_field('intro');
				echo get_the_date();
				?>
			</div>
		</div>
		<div class="post_main container">
			<div class="post_content">
				<?php
				while ( have_posts() ) :
				the_post();
				the_content(); ?>
			</div>
			<div class="post_sidebar">

			</div>
		</div>

			<?php the_post_navigation(
				array(
					'prev_text' => '<span class="nav-subtitle">' . esc_html__( 'Previous:', 'stier' ) . '</span> <span class="nav-title">%title</span>',
					'next_text' => '<span class="nav-subtitle">' . esc_html__( 'Next:', 'stier' ) . '</span> <span class="nav-title">%title</span>',
				)
			);
		endwhile; // End of the loop.
		?>

	</main><!-- #main -->

<?php
get_footer();
