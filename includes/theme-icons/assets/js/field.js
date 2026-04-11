(function ($) {
  function initialize_field($field) {
    const $container = $field.find(".s-tier-icons");
    
    $container.off('click.stier').on('click.stier', '.s-tier-icons__item-label', function(e) {
      e.preventDefault();
      const $label = $(this);
      const $input = $label.prev('input');
      const $allLabels = $container.find('.s-tier-icons__item-label');
      
      if (!$label.hasClass("active")) {
        $allLabels.removeClass("active");
        $container.find('input[type="radio"]').prop("checked", false);
        
        $input.prop("checked", true);
        $label.addClass("active");
        $input.trigger('change');
        
        if (typeof acf !== 'undefined') {
          $field.trigger('change');
          
          if (typeof acf.validation !== 'undefined') {
            acf.validation.remove($field);
          }
        }
      }
    });
  }

  if (typeof acf.add_action !== "undefined") {
    // ACF Classic
    acf.add_action("ready_field/type=s_tier_icons", initialize_field);
    acf.add_action("append_field/type=s_tier_icons", initialize_field);
    
    // ACF Block Editor v3
    acf.add_action("load_field/type=s_tier_icons", initialize_field);
    acf.add_action("show_field/type=s_tier_icons", initialize_field);
  }
})(jQuery);