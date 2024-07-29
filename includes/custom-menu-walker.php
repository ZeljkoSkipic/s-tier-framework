<?php
class CustomMenuWalker extends Walker_Nav_Menu
{
    function start_el(&$output, $item, $depth = 0, $args = [], $id = 0)
    {
        $output .= "<li class='" .  implode(" ", $item->classes) . "'>";
        $output .= '<a href="' . $item->url . '">';
        $output .= $item->title;
        $output .= '</a>';
        if (in_array('menu-item-has-children', $item->classes)) {
            $output .= '<span class="sub-menu-trigger"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></span>';
        }
    }
}
