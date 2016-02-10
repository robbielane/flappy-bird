var Chai = require('chai');
var assert = Chai.assert;
var Bird = require('../lib/bird');

describe('Bird', function() {
  context('new', function(){
    it('has correct attributes on instantiation', function(){
      var bird = new Bird(120,50,50,57);

      assert.equal(120, bird.x);
      assert.equal(50, bird.y);
      assert.equal(50, bird.width);
      assert.equal(57, bird.height)
    });
  });

  context('move functionality', function(){
    it('should increment 4', function () {
      var bird = new Bird(50,50,50,57);
      bird.move;

      assert.equal(54, bird.y);
    });

    it('should decrement 4', function () {
      var bird = new Bird(50,50,50,57);
      bird.momentum = 10;
      bird.move;

      assert.equal(46, bird.y);
    });

    it('should set momentum to 15', function() {
      var bird = new Bird(50,50,50,57);
      bird.spacebarPress;

      assert.equal(15, bird.momentum);
    });
  });

  context('boundary tracking', function(){
    it('should start out with default coordinates', function(){
      var bird = new Bird(50,50,50,57);

      assert.equal(50, bird.topLeft.x);
      assert.equal(50, bird.topLeft.y);
      assert.equal(100, bird.topRight.x);
      assert.equal(50, bird.topRight.y);
      assert.equal(100, bird.bottomRight.x);
      assert.equal(107, bird.bottomRight.y);
      assert.equal(50, bird.bottomLeft.x);
      assert.equal(107, bird.bottomLeft.y);
    });

    it('should decrement Y coords on move up', function(){
      var bird = new Bird(50,50,50,57);
      bird.momentum = 15;
      bird.move;
      bird.updateBounds();

      assert.equal(46, bird.topLeft.y);
      assert.equal(46, bird.topRight.y);
      assert.equal(103, bird.bottomRight.y);
      assert.equal(103, bird.bottomLeft.y);
    });

    it('should increment Y coords on move down', function(){
      var bird = new Bird(50,50,50,57);
      bird.move;
      bird.updateBounds();

      assert.equal(54, bird.topLeft.y);
      assert.equal(54, bird.topRight.y);
      assert.equal(111, bird.bottomRight.y);
      assert.equal(111, bird.bottomLeft.y);
    });

    it('should not affect X coords on move', function(){
      var bird = new Bird(50,50,50,57);
      bird.move;
      bird.updateBounds();

      assert.equal(50, bird.topLeft.x);
      assert.equal(100, bird.topRight.x);
      assert.equal(100, bird.bottomRight.x);
      assert.equal(50, bird.bottomLeft.x);
    });
  });
});
