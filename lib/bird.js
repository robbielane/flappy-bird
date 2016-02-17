const EventEmitter = require('events');

class Bird extends EventEmitter {
  constructor(x, y, width, height, ctx) {
    super();
    this.mode = 'bird';
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
    this.image.src = `/assets/images/flappy-${this.mode}-up-sprite.png`;
    this.gravity = 0;
    this.frameCount = 0
    this.frame = 0;
    this.flapSound = new Audio(`/assets/sounds/${this.mode}-wing.ogg`);
  };

  jorgeMode () {
    this.mode = 'jorge'
    this.flapSound.src = `/assets/sounds/${this.mode}-wing.ogg`;
    this.image.src = `/assets/images/flappy-${this.mode}-up-sprite.png`;
  }

  birdMode() {
    this.mode = 'bird'
    this.flapSound.src = `/assets/sounds/${this.mode}-wing.ogg`;
    this.image.src = `/assets/images/flappy-${this.mode}-up-sprite.png`;
  }

  get move () {
    this.gravity = this.gravity + 7
    if (this.gravity > 250) {
      this.image.src = `/assets/images/flappy-${this.mode}-down-sprite.png`;
    }
    this.momentum ? this.jump : this.y = this.y + (4 * this.gravity / 150);
  };

  get die () {
    this.image.src = `/assets/images/flappy-${this.mode}-die.png`;
    if (this.bottomRight.y < 525) {
      this.y = this.y + 10;
    }
  };

  get jump () {
    this.momentum--
    this.gravity = 100
    this.image.src = `/assets/images/flappy-${this.mode}-up-sprite.png`;
    this.y = this.y - (7 * this.momentum / 10);
  };

  updateBounds () {
    this.topLeft = { x: this.x, y: this.y };
    this.topRight = { x: this.x + this.width, y: this.y };
    this.bottomRight = { x: this.x + this.width, y: this.y + this.height };
    this.bottomLeft = { x: this.x, y: this.y + this.height };
  }

  get spacebarPress () {
    this.flapSound.play();
    this.momentum = 15;
  };

  get draw () {
    if (!this.alive) {
      this.ctx.drawImage(this.image, this.x, this.y)
    } else {
      this.animateBirdFrames();
    }
    this.resetFrameCount();
  };

  resetFrameCount() {
    if (this.frameCount >= 60) {this.frameCount = 0;}
  }

  animateBirdFrames () {
    this.frameCount++
    if (this.firstThirdOfAnimation()) {
      this.drawFirstThirdOfAnimation();
    } else if (this.secondThirdOfAnimation()) {
      this.drawSecondThirdOfAnimation();
    } else {
      this.drawThirdThirdOfAnimation();
    }
  }

  firstThirdOfAnimation () {
    return this.frameCount > 0 && this.frameCount < 20;
  }

  secondThirdOfAnimation () {
    return this.frameCount > 20 && this.frameCount < 40;
  }

  drawFirstThirdOfAnimation () {
    this.ctx.drawImage(this.image, 0, 0, 57, 60, this.x, this.y, 57, 60);
  }

  drawSecondThirdOfAnimation () {
    this.ctx.drawImage(this.image, 57, 0, 57, 60, this.x, this.y, 57, 60);
  }

  drawThirdThirdOfAnimation () {
    this.ctx.drawImage(this.image, 114, 0, 57, 60, this.x, this.y, 57, 60);
  }

}

module.exports = Bird;
