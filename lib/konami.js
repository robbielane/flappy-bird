const $ = require('jquery');

const secret = "38384040373937396665";
let input = "";
let timer;

const start = () => {
  $(document).keyup(function(e) {
     input += e.which;
     clearTimeout(timer);
     timer = setTimeout(function() { input = ""; }, 500);
     check_input();
  });
};

const check_input = () => {
    if(input === secret) {
        animateJorge();
    }
};

const animateJorge = () => {
  $('body').prepend(`<img src='/flappy-bird/assets/images/jorge-bird.png' class='konami'>`);
  setTimeout( () => { $('.konami').remove(); }, 3000);
};

module.exports = start;
