class Bird {
  constructor(x, y, width, height, ctx) {
    this.alive = true;
    this.momentum = 0;
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.topLeft = { x: this.x, y: this.y };
    this.topRight = { x: this.x + this.width, y: this.y };
    this.bottomRight = { x: this.x + this.width, y: this.y + this.height };
    this.bottomLeft = { x: this.x, y: this.y + this.height };
    this.image.src = '../assets/images/jorge-bird-small.png';
  };

  get move () {
    if (this.momentum) {
      this.jump;
    } else {
      this.y = this.y + 4;
    }
  };

  get die() {
    if (this.bottomRight.y < 540) {
      debugger;
      this.y = this.y + 8;
    }
  };

  get jump() {
    this.momentum--
    this.y = this.y - 4;
  };

  updateBounds() {
    this.topLeft = { x: this.x, y: this.y };
    this.topRight = { x: this.x + this.width, y: this.y };
    this.bottomRight = { x: this.x + this.width, y: this.y + this.height };
    this.bottomLeft = { x: this.x, y: this.y + this.height };
  }

  get spacebarPress() {
    this.momentum = 15;
  };

  get draw() {
    this.ctx.drawImage(this.image, this.x, this.y);
  };
}

module.exports = Bird;
