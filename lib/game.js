var Jorge = require('./jorge');


var Game = () => {
  var canvas = document.getElementById('game');
  var context = canvas.getContext('2d');

  var jorge = new Jorge(50, 50);
  jorge.moveUp;
}



module.exports = Game;
