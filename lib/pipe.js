class Pipe {
  constructor(width, ctx) {
    this.width = width || 75;
    this.height = Math.floor(Math.random() * (400 - 50)) + 50;
    this.ctx = ctx;
  };

  get drawPipe() {
    this.ctx.fillRect(300, 0, this.width, this.height)
  };
}

module.exports = Pipe;
