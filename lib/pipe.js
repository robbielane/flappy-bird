class Pipe {
  constructor(ctx, x) {
    this.x = x;
    this.width = 75;
    this.height = 640;
    this.ctx = ctx;
    this.offset = 200;
  };

  get drawPipe() {
    this.ctx.fillRect(300, -this.x, this.width, this.height);
    this.ctx.fillRect(300, (-this.x + this.height + this.offset), this.width, this.height);
  };
}

module.exports = Pipe;
