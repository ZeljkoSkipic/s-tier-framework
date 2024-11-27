<?php
$intro_text = get_field('intro_text');
?>

<div class="st_intro">
<?php get_template_part('components/title');
if( $intro_text ) { ?>
	<div class="intro_text">
		<?php echo $intro_text; ?>
	</div>
<?php } ?>

</div>
