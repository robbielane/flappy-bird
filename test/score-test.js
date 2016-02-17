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
      var bird = new Bird(240, 270, 50, 57, context);
      var score = new Score($, bird);
      var pipes = [new Pipe(context, 191)];
      score.increment;
      pipes.forEach(function(pipe){
        pipe.move;
        pipe.updateBounds();
        if (pipe.x + 52 === bird.x) {
          score.emit('incrementScoreEvent');
        }
      });
      assert.equal(score.score, 1);
    });
  });
});
