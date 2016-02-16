class Pipe {
  constructor(ctx, x) {
    this.ctx = ctx;
    this.x = x;
    this.y = Math.floor(Math.random() * (600 - 300)) + 300;
    this.width = 102;
    this.height = 640;
    this.offset = 140;
    this.topLeft = { x: this.x, y: -this.y + this.height };
    this.topRight = { x: this.x + this.width, y: -this.y + this.height };
    this.bottomRight = { x: this.x + this.width, y: -this.y + this.height + this.offset };
    this.bottomLeft = { x: this.x, y: -this.y + this.height + this.offset };
    this.image = new Image();
    this.image.src = '/assets/images/pipe.png';
  };

  get draw() {
    this.ctx.drawImage(this.image, this.x, -this.y);
    this.ctx.drawImage(this.image, this.x, (-this.y + this.height + this.offset));
  };

  get move() {
    if (this.topRight.x < 0) {
      this.x = 500;
      this.x = this.x - 2;
      this.y = Math.floor(Math.random() * (600 - 300)) + 300;
    } else {
      this.x = this.x - 2;
    }
  };

  updateBounds() {
    this.topLeft = { x: this.x, y: -this.y + this.height };
    this.topRight = { x: this.x + this.width, y: -this.y + this.height };
    this.bottomRight = { x: this.x + this.width, y: -this.y + this.height + this.offset };
    this.bottomLeft = { x: this.x, y: -this.y + this.height + this.offset };
  }
}

module.exports = Pipe;
