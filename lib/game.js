const $ = require('jquery');
const Jorge = require('./jorge');
const Pipe = require('./pipe');
const Background = require('./background');
const Score = require('./score')

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

const jorge = new Jorge(120, 240, 50, 57, context);
const pipes = [new Pipe(context, 500), new Pipe(context, 800)];
const backgrounds = [new Background(context, 0), new Background(context, 504)];
const background = new Image();
      background.src = '../assets/images/main-background.png';
const score = new Score(jorge, pipes, $);

const play = () => {
  gameEvents();
  requestAnimationFrame(gameLoop);
}

const gameLoop = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(background, 0, 0);
  jorge.drawJorge;
  jorge.move;
  score.increment;
  drawPipes();
  drawBackgrounds();
  // console.log(score);
  requestAnimationFrame(gameLoop);
}

const gameEvents = () => {
  canvas.addEventListener('click', () => { jorge.spacebarPress; });
  document.addEventListener('keydown', function(e) {
    if (e.which == 32) {
      jorge.spacebarPress;
    }
  });
}

const drawBackgrounds = () => {
  backgrounds.forEach( (background) => {
    background.draw;
    background.move;
  });
}

const drawPipes = () => {
  pipes.forEach( (pipe) => {
    pipe.drawPipe;
    pipe.moveAcrossCanvas;
  });
}

module.exports = play;
