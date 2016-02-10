var Chai = require('chai');
var assert = Chai.assert;
var Jorge = require('../lib/jorge');

describe('Jorge', function() {
  context('new Jorge', function(){
    it('has correct attributes on instantiation', function(){
      var jorge = new Jorge(120,50,50,57);

      assert.equal(120, jorge.x);
      assert.equal(50, jorge.y);
      assert.equal(50, jorge.width);
      assert.equal(57, jorge.height)
    });
  });

  context('move functionality', function(){
    it('should increment 4', function () {
      var jorge = new Jorge(50,50,50,54);
      jorge.move;

      assert.equal(54, jorge.y);
    });

    it('should decrement 4', function () {
      var jorge = new Jorge(50,50,50,54);
      jorge.momentum = 10;
      jorge.move;

      assert.equal(46, jorge.y);
    });

    it('should set momentum to 15', function() {
      var jorge = new Jorge(50,50,50,54);
      jorge.spacebarPress;

      assert.equal(15, jorge.momentum);
    });
  });
});
