const EventEmitter = require('events')

class Collision extends EventEmitter {
  constructor(jorge, pipes, grounds) {
    super();
    this.jorge = jorge;
    this.pipes = pipes;
    this.grounds = grounds;
  }

  get detect () {
    // this.detectPipe();
    // this.detectGround();
  }



  // detectPipe() {
  //   this.pipes.forEach( (pipe) => {
  //     console.log(this.jorge.y < (-pipe.y + pipe.height));
  //     if (this.hitTopPipe(pipe) || this.hitBottomPipe(pipe) ) { console.log('DEAD') }
  //   })
  // }
  //
  // hitBottomPipe(pipe) {
  //   return (this.hitPipeFront(pipe) && this.jorge.y > (-pipe.y + pipe.height + pipe.offset));
  // }
  //
  // hitTopPipe(pipe) {
  //   return this.hitPipeFront(pipe) && this.jorge.y < (-pipe.y + pipe.height || this.hitInnerPipe(pipe));
  // }
  //
  // hitInnerPipe(pipe) {
  //
  //   return this.jorge.y < (-pipe.y + pipe.height) && this.jorge.x > pipe.x + pipe.width || this.jorge.x < pipe.x
  // }
  //
  // hitPipeFront(pipe) {
  //   return (this.jorge.x + this.jorge.width) === pipe.x;
  // }
  //
  // detectGround() {
  //   this.grounds.forEach( (ground) => {
  //     if (this.hitGround(ground)) { console.log('DEAD') }
  //   })
  // }
  // 
  // hitGround(ground) {
  //   return this.jorge.y + this.jorge.height > ground.y;
  // }
}

module.exports = Collision;
