var Pipe = require('../lib/pipe');
var assert = require('chai').assert;

describe('Pipe', function(){
  context('new', function(){
    it('has correct default attributes', function(){
      var pipe = new Pipe();

      assert.equal(102, pipe.width);
    });

    it('has a random y location', function() {
      var pipe1 = new Pipe();
      var pipe2 = new Pipe();

      assert(pipe1.y !== pipe2.y);
    });
  });

  context('move functionality', function(){
    it('moves across the canvas', function(){
      var pipe = new Pipe(context, 500);

      assert.equal(500, pipe.x);
      pipe.move;
      assert.equal(497, pipe.x);
    });

    it('resets', function(){
      var pipe = new Pipe(context, 1);
      for (let i = 0; i < 53; i++) {
        pipe.move;
        pipe.updateBounds();
      }
      assert.equal(446, pipe.x);
    });
  });

  context('boundary tracking', function(){
    it('has default X coordinates', function(){
      var pipe = new Pipe(context, 500);

      assert.equal(500, pipe.topLeft.x);
      assert.equal(602, pipe.topRight.x);
      assert.equal(602, pipe.bottomRight.x);
      assert.equal(500, pipe.bottomLeft.x);
    });

    it('decrements X coordinates on move', function(){
      var pipe = new Pipe(context, 500);
      pipe.move;
      pipe.updateBounds();

      assert.equal(497, pipe.topLeft.x);
      assert.equal(599, pipe.topRight.x);
      assert.equal(599, pipe.bottomRight.x);
      assert.equal(497, pipe.bottomLeft.x);
    });
  });
});
