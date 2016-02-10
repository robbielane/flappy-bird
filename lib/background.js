class Background {
  constructor(ctx, x) {
    this.ctx = ctx;
    this.x = x;
    this.backgroundImage = new Image();
    this.backgroundImage.src = '../assets/images/background.png';
  }

  get draw () {
    this.ctx.drawImage(this.backgroundImage, this.x, 540);
    this.ctx.drawImage(this.backgroundImage, this.x, 540);
  }

  get move() {
    if (this.x < - 500) {
      this.x = 504;
      this.x = this.x - 2
    } else {
      this.x = this.x - 2
    }
  }
}

module.exports = Background;
