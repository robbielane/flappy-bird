const EventEmitter = require('events');
const $ = require('jquery');
const Bird = require('./bird');
const Pipe = require('./pipe');
const Collision = require('./collision');
const Ground = require('./ground');
const Score = require('./score')

class Game {
  constructor (canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.e = new EventEmitter;
    this.bird = new Bird(120, 240, 50, 32, this.context);
    this.pipes = [new Pipe(this.context, 500), new Pipe(this.context, 800)];
    this.score = new Score($);
    this.grounds = [new Ground(this.context, 0), new Ground(this.context, 504)];
    this.collision = new Collision(this.bird, this.pipes, this.grounds)
    this.background = new Image();
    this.background.src = '../assets/images/denver-background.png';
    this.button = new Image();
    this.button.src = '../assets/images/button.png'
    this.logo = new Image();
    this.logo.src = '../assets/images/logo.png'
  }

  gameLoopStart () {
    // debugger;
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.drawImage(this.background, 0, 0);
    this.grounds[0].draw;
    this.grounds[1].draw;
    this.bird.draw;
    this.renderStartButton;
    this.renderLogo;
    requestAnimationFrame(this.gameLoopStart.bind(this));
  }

  initNewGame () {
    this.startEvents;
    requestAnimationFrame(this.gameLoopStart());
  }

  init () {
    this.startEvents;
    requestAnimationFrame(this.gameLoopStart.bind(this));
  }

  get startEvents () {
    this.canvas.addEventListener('click', (e) => {
      if (e.y > 225 && e.y < 290 && e.x > 190 && e.x < 300) {
        document.querySelector('#game').removeEventListener('click')
        this.play();
      }
    })
  }

  get renderStartButton () {
    this.context.drawImage(this.button, 190, 225);
  }

  get renderLogo () {
    this.context.drawImage(this.logo, 40, 75);
  }

  play () {
    this.gameEvents();
    requestAnimationFrame(this.gameLoop.bind(this));
  }

  gameLoop () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.drawImage(this.background, 0, 0);
    this.drawPipes();
    this.drawGrounds();
    this.bird.move;
    this.bird.draw;
    this.trackScore(this.pipes, this.bird);
    this.collision.detect;
    this.bird.updateBounds();
    this.bird.alive ? requestAnimationFrame(this.gameLoop.bind(this)) : requestAnimationFrame(this.endGameLoop.bind(this));
  }

  endGameLoop () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.drawImage(this.background, 0, 0);
    this.drawPipes();
    this.drawGrounds();
    this.removeGameEvents();
    this.bird.draw;
    this.bird.die;
    this.bird.updateBounds();
    // setTimeout(this.newGame.bind(this), 1000)
    this.newGame();
    requestAnimationFrame(this.endGameLoop.bind(this));
  }

  newGame() {
    var newGame = new Game(this.canvas);
    newGame.initNewGame();
  }

  gameEvents () {
    this.score.increment;
    this.canvas.addEventListener('click', () => { this.bird.spacebarPress });
    document.addEventListener('keydown', (e) => {
      if (e.which == 32) { this.bird.spacebarPress }
    });
    this.collision.on('collisionEvent', () => { this.bird.alive = false; });
  }

  removeGameEvents () {
    this.canvas.removeEventListener('click');
    document.removeEventListener('keydown');
  }

  drawGrounds () {
    this.grounds.forEach( (ground) => {
      ground.draw;
      if (this.bird.alive) {
        ground.move;
      }
    });
  }

  drawPipes () {
    this.pipes.forEach( (pipe) => {
      pipe.draw;
      if (this.bird.alive) {
        pipe.move;
      }
      pipe.updateBounds();
    });
  }

  trackScore () {
    this.pipes.forEach( (pipe) => {
      if (pipe.x + 50 === this.bird.x) {
        this.score.emit('incrementScoreEvent')
      }
    });
  }
}


module.exports = Game;
