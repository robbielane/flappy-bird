const EventEmitter = require('events');
const $ = require('jquery');
const Looper = require('./looper');
const Bird = require('./bird');
const Pipe = require('./pipe');
const Collision = require('./collision');
const Ground = require('./ground');
const Score = require('./score');

class Game {
  constructor (canvas) {
    this.active = false;
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

  start () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.drawImage(this.background, 0, 0);
    this.grounds[0].draw;
    this.grounds[1].draw;
    this.bird.draw;
    this.renderStartButton;
    this.renderLogo;
  }

  play () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.drawImage(this.background, 0, 0);
    this.drawPipes();
    this.drawGrounds();
    this.bird.move;
    this.bird.draw;
    this.trackScore(this.pipes, this.bird);
    this.collision.detect;
    this.bird.updateBounds();
  }

  end () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.drawImage(this.background, 0, 0);
    this.drawPipes();
    this.drawGrounds();
    this.removeGameEvents();
    this.bird.draw;
    this.bird.die;
    this.bird.updateBounds();
    this.bird.y = 240;
    this.pipes[0].x = 500;
    this.pipes[1].x = 800;
    this.start();
  }

  removeGameEvents () {
    this.canvas.removeEventListener('click', this.bird.spacebarPress);
    document.removeEventListener('keydown', this.bird.spacebarPress);
  }

  get renderStartButton () {
    this.context.drawImage(this.button, 190, 225);
  }

  get renderLogo () {
    this.context.drawImage(this.logo, 40, 75);
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
