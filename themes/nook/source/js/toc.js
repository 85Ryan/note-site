(function() {
  'use strict';

  var header = document.getElementById('header');
  var headerHeight = header.clientHeight;
  var toc = document.getElementById('article-toc');
  var mbToc = document.getElementById('mb-article-toc');
  var tocTop = document.getElementById('article-toc-top');

  if (!toc) return;

  var footerHeight = document.getElementById('footer').clientHeight;
  document.getElementById('article-toc-inner').style['margin-bottom'] = footerHeight + 'px';

  function updateSidebarPosition() {
    var scrollTop = document.scrollingElement.scrollTop;

    if (scrollTop > headerHeight) {
      toc.classList.add('fixed');
    } else {
      toc.classList.remove('fixed');
    }
  }

  window.addEventListener('scroll', function() {
    window.requestAnimationFrame(updateSidebarPosition);
  });

  updateSidebarPosition();

  tocTop.addEventListener('click', function(e) {
    e.preventDefault();
    document.scrollingElement.scrollTop = 0;
  });

  var tocList = document.getElementsByClassName('toc');
  if (!tocList.length > 0) {
    toc.style.display = 'none';
    mbToc.style.display = 'none';
  }
})();
