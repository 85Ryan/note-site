/* global jQuery */
(function($) {
  // Highlight current nav
  $('#main-nav .main-nav-list-link').each(function() {
    if ($('.page-title').length > 0) {
      if (
        $(this)
          .html()
          .toUpperCase() ===
        $('.page-title')
          .html()
          .toUpperCase()
      ) {
        $(this).addClass('current');
      }
    } else if ($('.post-category-link').length > 0) {
      if ($(this).attr('href') === $('.post-category-link').attr('href')) {
        $(this).addClass('current');
      }
    }
  });

  $('.mobile-main-nav .mobile-nav-link').each(function() {
    if ($('.page-title').length > 0) {
      if (
        $(this)
          .html()
          .toUpperCase() ===
        $('.page-title')
          .html()
          .toUpperCase()
      ) {
        $(this).addClass('current');
      }
    } else if ($('.post-category-link').length > 0) {
      if ($(this).attr('href') === $('.post-category-link').attr('href')) {
        $(this).addClass('current');
      }
    }
  });
})(jQuery);
