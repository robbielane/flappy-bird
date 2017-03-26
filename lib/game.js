const $ = require('jquery');
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
    this.bird = new Bird(120, 240, 50, 43, this.context);
    this.pipes = [new Pipe(this.context, 500), new Pipe(this.context, 800)];
    this.score = new Score($, this.bird);
    this.grounds = [new Ground(this.context, 0), new Ground(this.context, 504)];
    this.collision = new Collision(this.bird, this.pipes, this.grounds);
    this.background = new Image();
    this.background.src = '/flappy-bird/assets/images/denver-background.png';
    this.button = new Image();
    this.button.src = '/flappy-bird/assets/images/button.png'
    this.logo = new Image();
    this.logo.src = '/flappy-bird/assets/images/logo.png'
  }

  start () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.drawImage(this.background, 0, 0);
    this.bird.draw;
    this.grounds[0].draw;
    this.grounds[1].draw;
    this.renderStartButton;
    this.renderLogo;
  }

  play () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.drawImage(this.background, 0, 0);
    this.drawPipes();
    this.bird.draw;
    this.drawGrounds();
    this.bird.move;
    this.trackScore(this.pipes, this.bird);
    this.collision.detect;
    this.bird.updateBounds();
  }

  end () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.drawImage(this.background, 0, 0);
    this.drawPipes();
    this.bird.draw;
    this.drawGrounds();
    this.bird.die;
    this.bird.updateBounds();
    this.start();
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
      if (pipe.x + 52 === this.bird.x) {
        this.score.emit('incrementScoreEvent');
      }
    });
  }

  reset () {
    this.active = true;
    this.bird.alive = true;
    this.bird.y = 240;
    this.pipes[0].x = 500;
    this.pipes[1].x = 800;
    this.score.score = 0;
    this.score.appendScore;
  }
}

module.exports = Game;
