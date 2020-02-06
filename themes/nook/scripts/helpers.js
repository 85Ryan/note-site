/* eslint-disable no-useless-escape */
/* global hexo */

'usr strict';

// head title.
hexo.extend.helper.register('head_title', function(separator) {
  let title = '';
  const sep = ' ' + separator + ' ';
  const siteTitle = this.config.title;
  const category = this.page.category;
  const tag = this.page.tag;
  const archive = this.page.archive;
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
  let bodyClass = '';
  if (this.page.category) {
    bodyClass = this.page.category;
  } else if (this.page.layout === 'post' && this.page.categories.length) {
    bodyClass = this.page.categories.data[0].name;
  } else if (this.page.archive) {
    bodyClass = 'archive';
  } else {
    bodyClass = this.page.layout;
  }
  return bodyClass;
});

// svg icons
hexo.extend.helper.register('svg_icon', idName => {
  const id = idName;
  return '<SVG class="icon"><use xlink:href="#' + id + '-icon" href="#' + id + '-icon" /></SVG>';
});

// twitter share link
hexo.extend.helper.register('twitter_share_link', function(className) {
  const baseUrl = 'https://twitter.com/intent/tweet?url=';
  let result = '';
  const icon = this.svg_icon('twitter');

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
  const baseUrl = 'http://service.weibo.com/share/share.php?url=';
  let result = '';
  const icon = this.svg_icon('weibo');

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
hexo.extend.helper.register('post_cover', post => {
  let url = post.cover || '';
  if (!url) {
    const imgPattern = /\<img\s.*?\s?src\s*=\s*['|"]?([^\s'"]+).*?\>/gi;
    const result = imgPattern.exec(post.content);
    if (result && result.length > 1) {
      url = result[1];
    }
  }
  return url;
});
