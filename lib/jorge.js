class Jorge {
  constructor(x, y, width, height, ctx) {
    this.momentum = 0;
    this.x = x;
    this.y = y;
    this.ctx = ctx
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = '../assets/images/jorge-bird-small.png';
  };

  get move () {
    if (this.momentum) {
      this.momentum--
      this.y = this.y - 4.5;
    } else {
      this.y = this.y + 4;
    }
  };

  get spacebarPress() {
    this.momentum = 10
  };

  get drawJorge() {
    this.ctx.drawImage(this.image, this.x, this.y);
  };
}

module.exports = Jorge;
