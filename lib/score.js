class Score {
  constructor(bird, pipes, $) {
    this.$ = $;
    this.bird = bird;
    this.pipes = pipes;
    this.score = 0;
  }

  get increment () {
    this.pipes.forEach( (pipe) => {
      if (pipe.x + 50 === this.bird.x) {
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
