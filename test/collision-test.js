var Chai = require('chai');
var assert = Chai.assert;
var Collision = require('../lib/collision');
var Bird = require('../lib/bird');
var Pipe = require('../lib/pipe');
var Ground = require('../lib/ground');
const sinon = require('sinon/pkg/sinon');

describe('Collision', function(){
  context('detection', function(){
    xit('when bird hits top pipe', function(){
      var bird = new Bird(50, 50, 50, 57, context);
      var pipes = [new Pipe(context, 101)];
      var grounds = [new Ground(context, 0)];
      var collision = new Collision(bird, pipes, grounds);

      var birdPipeCollision = { collisionEvent: function detect(){} };
      var spy = sinon.spy(birdPipeCollision, 'collisionEvent');

      collision.detect;
      pipes.forEach( (pipe) => {
        pipe.move;
        pipe.updateBounds();
      });
      assert(spy.calledOnce, 'event was not fired');
    });

    xit('when bird hits bottom pipe', function(){
    });
  });
});
