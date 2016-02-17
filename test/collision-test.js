var Chai = require('chai');
var assert = Chai.assert;
var Collision = require('../lib/collision');
var Bird = require('../lib/bird');
var Pipe = require('../lib/pipe');
var Ground = require('../lib/ground');

describe('Collision', function(){
  context('detection', function(){
    it('when bird hits pipe', function(){
      var bird = new Bird(50, 50, 50, 57, context);
      var pipes = [new Pipe(context, 101)];
      var grounds = [new Ground(context, 0)];
      var collision = new Collision(bird, pipes, grounds);
      collision.on('collisionEvent', () => { bird.alive = false; });

      pipes[0].move;
      pipes[0].updateBounds();
      collision.detect;

      assert.equal(bird.alive, false);
    });

    it('when bird hits ground', function(){
      var bird = new Bird(50, 508, 50, 57, context);
      var pipes = [new Pipe(context, 101)];
      var grounds = [new Ground(context, 0)];
      var collision = new Collision(bird, pipes, grounds);
      collision.on('collisionEvent', () => { bird.alive = false; });

      collision.detect;
      bird.move;
      bird.updateBounds();

      assert.equal(bird.alive, false);
    });
  });
});
