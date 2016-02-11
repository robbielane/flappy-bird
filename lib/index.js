const canvas = document.getElementById('game');

const Game = require('./game');
const game = new Game(canvas);

game.play();
