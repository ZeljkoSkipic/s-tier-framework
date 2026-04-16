<?php
$form = get_field('contact_form');
?>
<section <?php echo stier_block_attrs( $block, 'st_contact_block' ); ?>>
<?php get_template_part('components/background'); ?>
	<div class="st_contact_block_inner container">
		<div class="left">
			<?php get_template_part('components/intro'); ?>
		</div>
		<div class="right">
			<?php

			// Check if a form is selected.
			if ($form) {
				// Display the form using the form ID.
				echo do_shortcode('[wpforms id="' . $form->ID . '"]');
			}
			?>
		</div>
	</div>
</section>
