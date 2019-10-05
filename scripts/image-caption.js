/* global hexo */

hexo.extend.filter.register('after_post_render', function(data) {
  if (hexo.config.image_caption && hexo.config.image_caption.enable === true) {
    data.content = data.content.replace(
      /<p><img src="([^"]+)" alt="([^"]+)" title="([^"]+)"[^>]*><\/p>/g,
      '<figure><img src="$1" alt="$2"><figcaption class="image-caption">$3</figcaption></figure>'
    );
  }
  return data;
});
