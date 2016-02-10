class Pipe {
  constructor(ctx, x) {
    this.ctx = ctx;
    this.x = x;
    this.y = Math.floor(Math.random() * (500 - 300)) + 300;
    this.width = 114;
    this.height = 636;
    this.offset = 160;
    this.image = new Image();
    this.image.src = '../assets/images/pipe.png';
  };

  get drawPipe() {
    this.ctx.drawImage(this.image, this.x, -this.y);
    this.ctx.drawImage(this.image, this.x, (-this.y + this.height + this.offset));
  };

  get moveAcrossCanvas() {
    if (this.x < -114) {
      this.x = 500;
      this.x = this.x - 2;
    } else {
      this.x = this.x - 2;
    }
  };
}

module.exports = Pipe;
