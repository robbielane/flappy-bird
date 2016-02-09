class Pipe {
  constructor(ctx, x) {
    this.ctx = ctx;
    this.x = x ;
    this.y = Math.floor(Math.random() * (550 - 300)) + 300;
    this.width = 49;
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
    if (this.x < -75) {
      this.x = 520
      this.x--
    } else {
      this.x--
    }
  };
}

module.exports = Pipe;
