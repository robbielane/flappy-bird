class Jorge {
  constructor(x, y, canvas) {
    this.x = x;
    this.y = y;
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d')
  }

  get moveUp() {
    this.y--
  };

  get moveDown () {
    if (this.y < this.canvas.height - this.height) {
      this.y++
    }
    return this;
  };

  get spacebarPress() {
    for (var i = 0; i < 50; i++) {
      this.moveUp;
    }
  };

  get drawJorge() {
    var jorgeImage = new Image();
    jorgeImage.src = '../assets/images/jorge-bird-small.png'
    jorgeImage.onload = function(){
      this.context.drawImage(jorgeImage, this.x, this.y );
    }.bind(this)
  }
}

module.exports = Jorge;
