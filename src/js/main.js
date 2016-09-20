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
    speed: 300,
    centerMode: true,
    variableWidth: true
  });
});

/* document.getElementById('app').appendChild(
    document.createTextNode(greeter(WHO))
);*/
