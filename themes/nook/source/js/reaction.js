(function() {
  'use strict';

  var Cookies = window.Cookies.noConflict();
  var badButton = document.getElementById('reaction-bad');
  var notbadButton = document.getElementById('reaction-notbad');
  var goodButton = document.getElementById('reaction-good');

  var isHelpful = Cookies.get('is_helpful');

  if (isHelpful === 'bad') {
    badButton.classList.add('active');
  } else if (isHelpful === 'notbad') {
    notbadButton.classList.add('active');
  } else if (isHelpful === 'good') {
    goodButton.classList.add('active');
  }

  badButton.addEventListener('click', function() {
    Cookies.set('is_helpful', 'bad', { expires: 365, path: '' });
    badButton.classList.add('active');
    notbadButton.classList.remove('active');
    goodButton.classList.remove('active');
  });

  notbadButton.addEventListener('click', function() {
    Cookies.set('is_helpful', 'notbad', { expires: 365, path: '' });
    badButton.classList.remove('active');
    notbadButton.classList.add('active');
    goodButton.classList.remove('active');
  });

  goodButton.addEventListener('click', function() {
    Cookies.set('is_helpful', 'good', { expires: 365, path: '' });
    badButton.classList.remove('active');
    notbadButton.classList.remove('active');
    goodButton.classList.add('active');
  });
})();
