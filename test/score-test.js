var Chai = require('chai');
var assert = Chai.assert;
var Score = require('../lib/score');
var Pipe = require('../lib/pipe');
var Bird = require('../lib/bird');
var $ = require('jquery');

describe('Score', function(){
  context('new', function(){
    it('defaults to 0', function(){
      var score = new Score();

      assert.equal(score.score, 0);
    });
  });

  context('tracking', function(){
    it('increments when bird moves through pipe', function(){
      var score = new Score($);
      var bird = new Bird(240, 270, 50, 57, context);
      var pipes = [new Pipe(context, 192)];
      score.increment;
      pipes.forEach(function(pipe){
        pipe.move;
        pipe.updateBounds();
        if (pipe.x + 50 === bird.x) {
          score.emit('incrementScoreEvent')
        }
      });
      assert(score.score, 1)
    });
  });
});
