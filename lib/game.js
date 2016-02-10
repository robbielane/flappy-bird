const $ = require('jquery');
const Bird = require('./bird');
const Pipe = require('./pipe');
const Collision = require('./collision');
const Background = require('./background');
const Score = require('./score')

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

const bird = new Bird(120, 240, 50, 57, context);
const pipes = [new Pipe(context, 500), new Pipe(context, 800)];
const backgrounds = [new Background(context, 0), new Background(context, 504)];
const background = new Image();
background.src = '../assets/images/main-background.png';
const collision = new Collision(bird, pipes, backgrounds)
      background.src = '../assets/images/main-background.png';
const score = new Score(bird, pipes, $);

const play = () => {
  gameEvents();
  requestAnimationFrame(gameLoop);
}

const gameLoop = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(background, 0, 0);
  bird.drawBird;
  bird.move;
  score.increment;
  drawPipes();
  drawBackgrounds();
  collision.detect;
  bird.updateBounds();
  requestAnimationFrame(gameLoop);
}

const gameEvents = () => {
  canvas.addEventListener('click', () => { bird.spacebarPress; });
  document.addEventListener('keydown', function(e) {
    if (e.which == 32) {
      bird.spacebarPress;
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
    pipe.updateBounds();
  });
}

module.exports = play;
