  jQuery(document).ready(function($) {
    $(".st_accordion-header").click(function() {
      var $item = $(this).parent(".st_accordion-item");
      var isOpen = $item.hasClass("open");
      $item.siblings(".st_accordion-item").removeClass("open").children(".st_accordion-body").slideUp();
      if (!isOpen) {
        $(this).siblings(".st_accordion-body").slideDown();
        $item.addClass("open");
      } else {
        $(this).siblings(".st_accordion-body").slideUp();
        $item.removeClass("open");
      }
    });
  });