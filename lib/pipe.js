class Pipe {
  constructor(width) {
    this.width = width || 100;
    this.height = Math.floor(Math.random() * (200 - 50) + 50)
  }
}

module.exports = Pipe;
