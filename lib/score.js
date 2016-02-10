class Score {
  constructor(jorge, pipes) {
    this.jorge = jorge;
    this.pipes = pipes;
    this.score = 0;
  }

  get increment () {
    this.pipes.forEach( (pipe) => {
      if (pipe.x === this.jorge.x) {
        this.score++;
      }
    });
  }

}

module.exports = Score;
