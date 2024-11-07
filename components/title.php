<?php

$title = get_field('title');

if( $title ) { ?>
<h2 class="intro_title"><?php echo $title; ?></h2>
<?php }
