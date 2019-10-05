/* global hexo */

hexo.extend.filter.register('after_post_render', function(data) {
  data.content = data.content.replace(
    /<li>(<input [^>]* type="checkbox">[^<]*)<\/li>/g,
    '<li class="check-list">$1</li>'
  );
  return data;
});
