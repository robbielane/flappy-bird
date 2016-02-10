const EventEmitter = require('events')

class Collision extends EventEmitter {
  constructor(jorge, pipes, grounds) {
    super();
    this.jorge = jorge;
    this.pipes = pipes;
    this.grounds = grounds;
  }

  get detect () {
    this.detectTopPipe();
    this.detectBottomPipe();
    this.detectGround();
  }

  detectTopPipe() {
    this.pipes.forEach( (pipe) => {
      if (this.inBetweenPipes(pipe) && this.hitTopPipe(pipe)) {
        console.log('Hit Top Pipe');
      }
    })
  }

  detectBottomPipe() {
    this.pipes.forEach( (pipe) => {
      if (this.inBetweenPipes(pipe) && this.hitBottomPipe(pipe)) {
        console.log('Hit Bottom Pipe');
      }
    })
  }

  inBetweenPipes(pipe) {
    return this.jorge.topRight.x > pipe.topLeft.x && this.jorge.topLeft.x < pipe.topRight.x;
  }

  hitTopPipe(pipe) {
    return this.jorge.topLeft.y < pipe.topLeft.y;
  }

  hitBottomPipe(pipe) {
    return this.jorge.bottomLeft.y > pipe.bottomLeft.y;
  }


  detectGround() {
    this.grounds.forEach( (ground) => {
      if (this.hitGround(ground)) { console.log('DEAD') }
    })
  }

  hitGround(ground) {
    return this.jorge.y + this.jorge.height > ground.y;
  }
}

module.exports = Collision;
