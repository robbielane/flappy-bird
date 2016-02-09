class Pipe {
  constructor(ctx, x) {
    this.ctx = ctx;
    this.x = x ;
    this.y = Math.floor(Math.random() * (550 - 300)) + 300;
    this.width = 75;
    this.height = 640;
    this.offset = 160;
  };

  get drawPipe() {
    this.ctx.fillRect(this.x, -this.y, this.width, this.height);
    this.ctx.fillRect(this.x, (-this.y + this.height + this.offset), this.width, this.height);
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
