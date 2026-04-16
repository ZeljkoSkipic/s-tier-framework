<?php
$buttons = [
    'button_1' => 'btn-1',
    'button_2' => 'btn-2',
    'button_3' => 'btn-3',
];

$has_buttons = false;
foreach ( $buttons as $field => $class ) {
    if ( get_field( $field ) ) {
        $has_buttons = true;
        break;
    }
}

if ( $has_buttons ) : ?>
<div class="btns">
    <?php foreach ( $buttons as $field => $class ) :
        $btn = get_field( $field );
        if ( $btn ) :
            $url    = $btn['url'];
            $title  = $btn['title'];
            $target = $btn['target'] ? $btn['target'] : '_self';
            ?>
            <a class="btn <?php echo esc_attr( $class ); ?>" href="<?php echo esc_url( $url ); ?>" target="<?php echo esc_attr( $target ); ?>"><?php echo esc_html( $title ); ?></a>
        <?php endif;
    endforeach; ?>
</div>
<?php endif; ?>