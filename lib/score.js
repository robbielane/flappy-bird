const EventEmitter = require('events');

class Score extends EventEmitter {
  constructor($, bird) {
    super();
    this.bird = bird;
    this.$ = $;
    this.score = 0;
    this.sound = new Audio();
  }

  get increment () {
    this.on('incrementScoreEvent', function() {
      this.sound.src = `/assets/sounds/${this.bird.mode}-point.ogg`;
      this.sound.play();
      this.score++;
      this.appendScore;
    });
  }

  get appendScore () {
    this.$('.score').empty();
    this.$('.score').append(`<h3>Score: ${this.score}</h3>`);
  }
}

module.exports = Score;
