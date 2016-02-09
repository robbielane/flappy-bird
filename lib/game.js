var Jorge = require('./jorge');

class Game {
  constructor() {
    this.canvas = document.getElementById('game');
    this.context = this.canvas.getContext('2d');
    this.jorge = new Jorge(50, 50, this.canvas);
  }

  get play() {
    this.jorge.drawJorge
    requestAnimationFrame(this.gameLoop());
  }

  gameLoop() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.jorge.moveDown;
    requestAnimationFrame(this.gameLoop())
  }
}

module.exports = Game;
