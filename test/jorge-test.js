var Chai = require('chai');
var assert = Chai.assert;
var Jorge = require('../lib/jorge');

describe('Jorge', function() {

  it('should increment one', function () {
    var jorge = new Jorge(50,50);
    jorge.moveUp;

    assert.equal(51, jorge.y);
  });

  it('should decrement one', function () {
    var jorge = new Jorge(50,50);
    jorge.moveDown;

    assert.equal(49, jorge.y);
  });

});
