/* eslint-disable no-useless-escape */
/* global hexo */

'usr strict';

// head title.
hexo.extend.helper.register('head_title', function(separator) {
  var title = '';
  var sep = ' ' + separator + ' ';
  var siteTitle = this.config.title;
  var category = this.page.category;
  var tag = this.page.tag;
  var archive = this.page.archive;
  if (this.page.title) {
    title = this.page.title + sep;
  } else {
    if (category) {
      title = this.__('menu.' + category) + sep;
    } else if (tag) {
      title = this.__('header.tag') + ': ' + tag + sep;
    } else if (archive) {
      if (this.page.year) {
        title = this.__('header.archive') + ': ' + this.page.year + sep;
      } else {
        title = this.__('header.archive') + sep;
      }
    } else {
      title = '';
    }
  }
  return title + siteTitle;
});

// body class.
hexo.extend.helper.register('body_class', function() {
  var bodyClass = '';
  if (this.page.category) {
    bodyClass = this.page.category;
  } else if (this.page.layout === 'post' && this.page.categories.length) {
    bodyClass = this.page.categories.data[0].name;
  } else {
    bodyClass = this.page.layout;
  }
  return bodyClass;
});

// svg icons
hexo.extend.helper.register('svg_icon', function(idName) {
  var id = idName;
  return '<SVG class="icon"><use xlink:href="#' + id + '-icon" href="#' + id + '-icon" /></SVG>';
});

// twitter share link
hexo.extend.helper.register('twitter_share_link', function(className) {
  var baseUrl = 'https://twitter.com/intent/tweet?url=';
  var result = '';
  var icon = this.svg_icon('twitter');

  result =
    '<a href="' +
    baseUrl +
    this.post.permalink +
    '&text=' +
    this.post.title +
    '" class="' +
    className +
    '" target="_blank">';
  result += icon + '</a>';

  return result;
});

// weibo share link
hexo.extend.helper.register('weibo_share_link', function(className) {
  var baseUrl = 'http://service.weibo.com/share/share.php?url=';
  var result = '';
  var icon = this.svg_icon('weibo');

  result =
    '<a href="' +
    baseUrl +
    this.post.permalink +
    '&title=' +
    this.post.title +
    '" class="' +
    className +
    '" target="_blank">';
  result += icon + '</a>';

  return result;
});

// Post Cover
hexo.extend.helper.register('post_cover', function(post) {
  var url = post.cover || '';
  if (!url) {
    var imgPattern = /\<img\s.*?\s?src\s*=\s*['|"]?([^\s'"]+).*?\>/gi;
    var result = imgPattern.exec(post.content);
    if (result && result.length > 1) {
      url = result[1];
    }
  }
  return url;
});
