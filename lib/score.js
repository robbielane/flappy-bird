const EventEmitter = require('events')

class Score extends EventEmitter {
  constructor($) {
    super();
    this.$ = $;
    this.score = 0;
  }

  get increment () {
    this.on('incrementScoreEvent', function() {
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
