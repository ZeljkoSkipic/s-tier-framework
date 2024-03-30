<?php

$title = get_field('title');
$tag = get_field('heading_tag');
$style = get_field('title_style');

if( $title ) { ?>
<<?php echo esc_html($tag); ?> class="intro_title <?php echo $style; ?>"><?php echo $title; ?></<?php echo esc_html($tag); ?>>
<?php }
