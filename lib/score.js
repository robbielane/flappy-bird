const EventEmitter = require('events')

class Score extends EventEmitter {
  constructor($) {
    super();
    this.$ = $;
    this.score = 0;
    this.sound = new Audio('/assets/sounds/bird-point.ogg')
  }

  get increment () {
    this.on('incrementScoreEvent', function() {
      this.sound.play();
      this.score++;
      this.appendScore;
    })
  }

  get appendScore () {
    this.$('.score').empty();
    this.$('.score').append(`<h3>Score: ${this.score}</h3>`);
  }
}

module.exports = Score;
