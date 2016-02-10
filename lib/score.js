class Score {
  constructor(jorge, pipes, $) {
    this.$ = $;
    this.jorge = jorge;
    this.pipes = pipes;
    this.score = 0;
  }

  get increment () {
    this.pipes.forEach( (pipe) => {
      if (pipe.x + 50 === this.jorge.x) {
        this.score++;
        this.appendScore;
      }
    });
  }

  get appendScore () {
    this.$('.score').empty();
    this.$('.score').append(`<h3>Score: ${this.score}</h3>`);
  }

}

module.exports = Score;
