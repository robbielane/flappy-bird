var Jorge = require('./jorge');
var Pipe = require('./pipe');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var jorge = new Jorge(120, 240, 50, 57, context);
var pipe = new Pipe(75, context);

var play = () => {
  gameEvents();
  requestAnimationFrame(gameLoop);
}

var gameLoop = () => {
  context.clearRect(0, 0, canvas.width, canvas.height)
  jorge.drawJorge;
  pipe.drawPipe;
  jorge.moveDown;
  requestAnimationFrame(gameLoop);
}

var gameEvents = () => {
  canvas.addEventListener('click', () => { jorge.spacebarPress; });
  document.addEventListener('keyup', function(e) {
    if (e.which == 32) {
      jorge.spacebarPress;
    }
  });
}

module.exports = play;
