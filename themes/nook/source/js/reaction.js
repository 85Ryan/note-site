(function() {
  'use strict';

  const Cookies = window.Cookies.noConflict();
  const badButton = document.getElementById('reaction-bad');
  const notbadButton = document.getElementById('reaction-notbad');
  const goodButton = document.getElementById('reaction-good');

  const url = document.location.pathname;
  const isHelpful = Cookies.get('is_helpful', { path: url });

  if (!badButton || !notbadButton || !goodButton) return;

  if (isHelpful === 'bad') {
    badButton.classList.add('active');
  } else if (isHelpful === 'notbad') {
    notbadButton.classList.add('active');
  } else if (isHelpful === 'good') {
    goodButton.classList.add('active');
  }

  badButton.addEventListener('click', () => {
    Cookies.set('is_helpful', 'bad', { expires: 365, path: url });
    badButton.classList.add('active');
    notbadButton.classList.remove('active');
    goodButton.classList.remove('active');
  });

  notbadButton.addEventListener('click', () => {
    Cookies.set('is_helpful', 'notbad', { expires: 365, path: url });
    badButton.classList.remove('active');
    notbadButton.classList.add('active');
    goodButton.classList.remove('active');
  });

  goodButton.addEventListener('click', () => {
    Cookies.set('is_helpful', 'good', { expires: 365, path: url });
    badButton.classList.remove('active');
    notbadButton.classList.remove('active');
    goodButton.classList.add('active');
  });
})();
