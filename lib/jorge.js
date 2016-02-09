class Jorge {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = '../assets/images/jorge-bird-small.png';
  };

  get moveUp() {
    this.y--
  };

  get moveDown () {
    this.y++
  };

  get spacebarPress() {
    for (var i = 0; i < 50; i++) {
      this.moveUp;
    }
  };

  get drawJorge() {
    var canvas = document.getElementById('game');
    var context = canvas.getContext('2d');
    context.drawImage(this.image, this.x, this.y );
  };
}

module.exports = Jorge;
