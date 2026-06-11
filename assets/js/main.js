document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav__toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('nav--open');
    });
  }
});
