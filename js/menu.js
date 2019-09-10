var navButton = document.getElementById('navbar-button');
var navbar = document.getElementById('navbar');

navButton.addEventListener('click', function (event) {
  if (navbar.className.indexOf('nav-open') == -1) {
    navbar.setAttribute('class', 'navbar-navigation nav-open');

    var e = document.querySelectorAll('.navbar-svg');
    e[0].setAttribute('class', 'navbar-svg navbar-button--rotate');
    e[1].setAttribute('class', 'navbar-svg navbar-button--rotate-ccw');
    document.querySelector('rect.navbar-svg-rect-top').setAttribute('class', 'navbar-svg-rect-top navbar-button--transform');
    document.querySelector('.navbar-svg-rect-bottom').setAttribute('class', 'navbar-svg-rect-bottom navbar-button--transform');
  } else {
    navbar.setAttribute('class', 'navbar-navigation');

    var e = document.querySelectorAll('.navbar-svg');
    e[0].setAttribute('class', 'navbar-svg');
    e[1].setAttribute('class', 'navbar-svg');
    document.querySelector('rect.navbar-svg-rect-top').setAttribute('class', 'navbar-svg-rect-top');
    document.querySelector('.navbar-svg-rect-bottom').setAttribute('class', 'navbar-svg-rect-bottom');
  }
});
