const EventEmitter = require('events');

class Bird extends EventEmitter {
  constructor(x, y, width, height, ctx) {
    super();
    this.alive = true;
    this.momentum = 0;
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.topLeft = { x: this.x, y: this.y };
    this.topRight = { x: this.x + this.width, y: this.y };
    this.bottomRight = { x: this.x + this.width, y: this.y + this.height };
    this.bottomLeft = { x: this.x, y: this.y + this.height };
    this.image.src = '../assets/images/flappy-bird.png';
    this.gravity = 0;
  };

  get move () {
    this.gravity = this.gravity + 7
    if (this.gravity > 250) {
      this.image.src = '../assets/images/flappy-bird-down.png';
    }
    this.momentum ? this.jump : this.y = this.y + (4 * this.gravity / 150);
  };

  get die () {
    this.image.src = '../assets/images/flappy-bird-die.png';
    if (this.bottomRight.y < 520) {
      this.y = this.y + 10;
    }
  };

  get jump () {
    this.momentum--
    this.gravity = 100
    this.image.src = '../assets/images/flappy-bird-up.png';
    this.y = this.y - 5;
  };

  updateBounds () {
    this.topLeft = { x: this.x, y: this.y };
    this.topRight = { x: this.x + this.width, y: this.y };
    this.bottomRight = { x: this.x + this.width, y: this.y + this.height };
    this.bottomLeft = { x: this.x, y: this.y + this.height };
  }

  get spacebarPress () {
    this.momentum = 15;
  };

  get draw () {
    this.ctx.drawImage(this.image, this.x, this.y);
  };
}

module.exports = Bird;
