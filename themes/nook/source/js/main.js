/* global jQuery */
(function($) {
  'use strict';

  // Highlight current nav
  $('#main-nav .main-nav-link').each(function() {
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

  // fix markdown check list
  $('li.check-list-item').each(function() {
    $(this)
      .parent()
      .addClass('check-list');
  });

  // Article Toc

  var footerHeight = $('#footer').outerHeight() + 50;
  $('#article-toc-inner').each(function() {
    $(this).css('margin-bottom', footerHeight + 'px');
  });

  if (!$('.toc').length > 0) {
    $('#article-toc').hide();
    $('#mb-article-toc').hide();
  }

  $('#article-toc-top').click(function(e) {
    e.preventDefault();
    $(window).scrollTo('0', {
      duration: 600
    });
  });

  $('.toc-link').click(function() {
    var target = $($(this).attr('href'));
    if (!target) return;
    var targetOffset = $(target).offset().top;
    $('html,body').animate(
      {
        scrollTop: targetOffset
      },
      500
    );
    return false;
  });

  $(window).scroll(function() {
    var headerHeight = $('#header').outerHeight(true);
    var tocSelector = $('#article-toc');
    var top = $(document).scrollTop();
    var items = $('.post-content').find('h1,h2,h3,h4,h5,h6');
    var currentId = '';

    if (!tocSelector) return;

    if (top > headerHeight) {
      tocSelector.addClass('fixed');
    } else {
      tocSelector.removeClass('fixed');
    }

    items.each(function() {
      var m = $(this);
      var itemTop = m.offset().top;
      if (top > itemTop - 20) {
        currentId = '#' + m.attr('id');
      } else {
        return false;
      }
    });

    var currentLink = tocSelector.find('.current');

    if (currentId) {
      if (currentLink.attr('href') !== currentId) {
        currentLink.removeClass('current');
        tocSelector.find('[href="' + currentId + '"]').addClass('current');
        $('#article-toc ol ol').hide();
        $('#article-toc a.current')
          .parents('ol')
          .show();
        $('#article-toc a.current ~ ol').show();
      }
    } else {
      currentLink.removeClass('current');
      $('#article-toc ol ol').hide();
    }
  });
})(jQuery);
