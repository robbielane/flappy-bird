class Ground {
  constructor(ctx, x) {
    this.ctx = ctx;
    this.x = x;
    this.y = 540;
    this.backgroundImage = new Image();
    this.backgroundImage.src = '/flappy-bird/assets/images/background.png';
  }

  get draw () {
    this.ctx.drawImage(this.backgroundImage, this.x, this.y);
    this.ctx.drawImage(this.backgroundImage, this.x, this.y);
  }

  get move() {
    if (this.x < -500) {
      this.x = 504;
      this.x = this.x - 3;
    } else {
      this.x = this.x - 3;
    }
  }
}

module.exports = Ground;
