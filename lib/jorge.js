class Jorge {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  get moveUp() {
    this.y++
  };

  get moveDown () {
    this.y--
  };
}

module.exports = Jorge;
