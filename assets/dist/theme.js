(() => {
  // assets/js/main.js
  jQuery(document).ready(function($) {
    $(".menu-toggle").click(function() {
      $("#primary-menu").fadeToggle();
      $(this).toggleClass("menu-open");
    });
    $(".sub-menu-trigger").click(function() {
      $(this).parent().toggleClass("sub-menu-open");
      $(this).siblings(".sub-menu").slideToggle();
    });
  });
})();
