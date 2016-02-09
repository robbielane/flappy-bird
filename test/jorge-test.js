var Chai = require('chai');
var assert = Chai.assert;
var Jorge = require('../lib/jorge');

describe('Jorge', function() {
  context('new Jorge', function(){
    it('has correct attributes on instantiation', function(){
      var jorge = new Jorge(120,50,50,54);

      assert.equal(120, jorge.x);
      assert.equal(50, jorge.y);
      assert.equal(50, jorge.width);
      assert.equal(54, jorge.height)
    });
  });

  context('move functionality', function(){
    it('should increment one', function () {
      var jorge = new Jorge(50,50,50,54);
      jorge.move;

      assert.equal(49, jorge.y);
    });

    it('should decrement one', function () {
      var jorge = new Jorge(50,50,50,54);
      jorge.momentum = 10;
      jorge.move;

      assert.equal(51, jorge.y);
    });

    it('should increment y location by 50', function() {
      var jorge = new Jorge(50,50,50,54);
      jorge.spacebarPress;

      assert.equal(0, jorge.y);
    });
  });
});
