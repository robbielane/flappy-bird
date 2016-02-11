const EventEmitter = require('events');

class Collision extends EventEmitter {
  constructor(bird, pipes, grounds) {
    super();
    this.bird = bird;
    this.pipes = pipes;
    this.grounds = grounds;
  }

  get detect () {
    this.detectTopPipe();
    this.detectBottomPipe();
    this.detectGround();
  }

  detectTopPipe() {
    // NOTE: when running the test, `this` is Collision
    this.pipes.forEach( (pipe) => {
      // NOTE: here, `this` is undefined
      if (this.inBetweenPipes(pipe) && this.hitTopPipe(pipe)) {
        this.emit('collisionEvent');
      }
    })
  }

  detectBottomPipe() {
    this.pipes.forEach( (pipe) => {
      if (this.inBetweenPipes(pipe) && this.hitBottomPipe(pipe)) {
        this.emit('collisionEvent');
      }
    })
  }

  inBetweenPipes(pipe) {
    return this.bird.topRight.x > pipe.topLeft.x && this.bird.topLeft.x < pipe.topRight.x;
  }

  hitTopPipe(pipe) {
    return this.bird.topLeft.y < pipe.topLeft.y;
  }

  hitBottomPipe(pipe) {
    return this.bird.bottomLeft.y > pipe.bottomLeft.y;
  }


  detectGround() {
    this.grounds.forEach( (ground) => {
      if (this.hitGround(ground)) {
        this.emit('collisionEvent');
      }
    })
  }

  hitGround(ground) {
    return this.bird.y + this.bird.height > ground.y;
  }
}

module.exports = Collision;
