var Pipe = require('../lib/pipe');
var assert = require('chai').assert;

describe('Pipe', function(){
  context('new pipe', function(){
    it('has correct default attributes', function(){
      var pipe = new Pipe();

      assert.equal(pipe.width, 75);
    });

    it('has a random height', function() {
      var pipe1 = new Pipe();
      var pipe2 = new Pipe();

      assert(pipe1.height !== pipe2.height);
    });
  });
});
