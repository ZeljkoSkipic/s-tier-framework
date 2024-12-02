jQuery(document).ready(function ($) {
  // Mobile navigation

  $(".menu-toggle").click(function () {
    $("#primary-menu").fadeToggle();
    $(this).toggleClass('menu-open');
  });

  // Sub Menu Trigger

  $(".sub-menu-trigger").click(function () {
    $(this).parent().toggleClass('sub-menu-open');
    $(this).siblings(".sub-menu").slideToggle();
  });

  // Accordion

  $(".st_accordion-header").click(function () {
    $(this).siblings(".st_accordion-body").slideToggle();
    $(this).parent('.st_accordion-item ').toggleClass('open');
  });

  // Tabs

  $('.st_tabs_nav li:first-child').addClass('active');
  $('.st_tabs_nav a').click(function (e) {
    e.preventDefault();
    // Check for active
    var tabLabels = $(this.closest('.container')).find('.st_tabs_nav li');
    tabLabels.removeClass('active');
    $(this).parent().addClass('active');

    // Display active tab
    var currentTab = $(this).data('tab');
    var currentsTabContent = $(this.closest('.container')).find('.st_tab');
    currentsTabContent.hide();
    $.each(currentsTabContent, function (key, tab) {
      var tabContentIndex = $(tab).data('tab');
      if (tabContentIndex === currentTab) {
        $(tab).show();
      }
    });
    return false;
  });
});
