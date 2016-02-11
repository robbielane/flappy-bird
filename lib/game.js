const EventEmitter = require('events');
const e = new EventEmitter;
const $ = require('jquery');
const Bird = require('./bird');
const Pipe = require('./pipe');
const Collision = require('./collision');
const Ground = require('./ground');
const Score = require('./score')

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

const bird = new Bird(120, 240, 50, 32, context);
const pipes = [new Pipe(context, 500), new Pipe(context, 800)];
const grounds = [new Ground(context, 0), new Ground(context, 504)];
const background = new Image();
      background.src = '../assets/images/denver-background.png';
const collision = new Collision(bird, pipes, grounds)
const score = new Score($);

const play = () => {
  gameEvents();
  requestAnimationFrame(gameLoop);
}

const gameLoop = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(background, 0, 0);
  drawPipes();
  drawGrounds();
  bird.move;
  bird.draw;
  trackScore(pipes, bird);
  collision.detect;
  bird.updateBounds();
  bird.alive ? requestAnimationFrame(gameLoop) : requestAnimationFrame(endGameLoop);
}

const endGameLoop = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(background, 0, 0);
  drawPipes();
  drawGrounds();
  removeGameEvents();
  bird.draw;
  bird.die;
  bird.updateBounds();
  requestAnimationFrame(endGameLoop);
}

const gameEvents = () => {
  score.increment;
  canvas.addEventListener('click', listenForClick);
  document.addEventListener('keydown', listenForSpacebar);
  collision.on('collisionEvent', () => { bird.alive = false; });
}

const removeGameEvents = () => {
  canvas.removeEventListener('click', listenForClick);
  document.removeEventListener('keydown', listenForSpacebar);
}

const listenForSpacebar = (e) => {
  if (e.which == 32) {
    bird.spacebarPress;
  }
}

const listenForClick = () => {
  bird.spacebarPress;
}

const drawGrounds = () => {
  grounds.forEach( (ground) => {
    ground.draw;
    if (bird.alive) {
      ground.move;
    }
  });
}

const drawPipes = () => {
  pipes.forEach( (pipe) => {
    pipe.draw;
    if (bird.alive) {
      pipe.move;
    }
    pipe.updateBounds();
  });
}

const trackScore = (pipes, bird) => {
  pipes.forEach( (pipe) => {
    if (pipe.x + 50 === bird.x) {
      score.emit('incrementScoreEvent')
    }
  });
}
module.exports = play;
