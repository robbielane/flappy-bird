var Pipe = require('../lib/pipe');
var assert = require('chai').assert;

describe('Pipe', function(){
  context('new pipe', function(){
    it('has correct default attributes', function(){
      var pipe = new Pipe();

      assert.equal(pipe.width, 49);
    });

    it('has a random y location', function() {
      var pipe1 = new Pipe();
      var pipe2 = new Pipe();

      assert(pipe1.y !== pipe2.y);
    });

    it('moves across the canvas', function(){
      var pipe = new Pipe(context, 500);

      assert.equal(pipe.x, 500);
      pipe.moveAcrossCanvas;
      assert.equal(pipe.x, 498);
    });
  });
});
