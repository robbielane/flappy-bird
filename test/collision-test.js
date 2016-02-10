var Chai = require('chai');
var assert = Chai.assert;
var Collision = require('../lib/collision');
var Bird = require('../lib/bird');
var Pipe = require('../lib/pipe');
var Ground = require('../lib/ground');
var EventEmitter = require('events');
var e = new EventEmitter();

describe('Collision', function(){
  context('detection', function(){
    var bird = new Bird(50, 50, 50, 57);
    var pipe = new Pipe(context, 101);
    var ground = new Ground(context, 0)
    var collision = new Collision(bird, pipe, ground);

    it('when bird hits top pipe', function(){
      var eventEmitted = false
      e.on('collisionEvent', function() {
        eventEmitted = true;
      });
      pipe.move;
      pipe.updateBounds();
      pipe.move;
      pipe.updateBounds();
      pipe.move;
      pipe.updateBounds();
      pipe.move;
      pipe.updateBounds();
      pipe.move;
      pipe.updateBounds();
      pipe.move;
      pipe.updateBounds();
      pipe.move;
      pipe.updateBounds();
      pipe.move;
      pipe.updateBounds();
      pipe.move;
      pipe.updateBounds();
      pipe.move;
      pipe.updateBounds();
      pipe.move;
      pipe.updateBounds();
      pipe.move;
      pipe.updateBounds();
      pipe.move;
      pipe.updateBounds();
      pipe.move;
      pipe.updateBounds();

      assert.equal(true, eventEmitted);
    });

    it('when bird hits bottom pipe', function(){

    });
  });
});
