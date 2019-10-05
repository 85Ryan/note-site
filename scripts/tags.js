/* global hexo */

'use strict';

hexo.extend.tag.register('note', function(args, content) {
  var className = args.shift();
  var header = '';
  var result = '';
  var icon = '';

  if (args.length) {
    header += '<strong class="note-title">' + args.join(' ') + '</strong>';
  }

  icon +=
      '<svg class="icon"><use xlink:href="#' +
      className +
      '-icon" href="#' +
      className +
      '-icon"></use></svg>';

  result += '<blockquote class="note ' + className + '">' + icon + header;
  result += hexo.render.renderSync({ text: content, engine: 'markdown' });
  result += '</blockquote>';

  return result;
}, true);
