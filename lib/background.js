class Background {
  constructor(ctx, x) {
    this.ctx = ctx;
    this.x = x;
    this.backgroundImage = new Image();
    this.backgroundImage.src = '../assets/images/background.png';
  }

  get draw () {
    this.ctx.drawImage(this.backgroundImage, this.x, 526);
    this.ctx.drawImage(this.backgroundImage, this.x, 526);
  }

  get move() {
    if (this.x < -480) {
      this.x = 480;
      this.x = this.x - 2
    } else {
      this.x = this.x - 2
    }
  }
}

module.exports = Background;
