import $ from 'jquery';
/*import 'lightslider';

import "lightslider/dist/img/controls.png"; */

import 'slick-carousel';

const WHO = 'JS';
const greeter = (who) => `Hello from ${who}!`;

$('#app').append(greeter(WHO));

$(document).ready(function() {
  $("#slick").slick({
    dots: true,
    infinite: true,
    /* speed: 300, */
    centerMode: true,
    variableWidth: true
  });
});

/* document.getElementById('app').appendChild(
    document.createTextNode(greeter(WHO))
);*/



var last_known_scroll_position = 0;
var ticking = false;

function doSomething(scroll_pos) {
  if (scroll_pos > 10) {
    document.getElementById('navigation-bar').classList.add("visible")
    document.getElementById('navigation-bar').classList.remove("invisible")
  } else {
    document.getElementById('navigation-bar').classList.remove("visible")
    document.getElementById('navigation-bar').classList.add("invisible")
  }
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });
  }
  ticking = true;
});
