const canvas = document.getElementById('game');

const looper = require('./looper');
const Game = require('./game');

let game = new Game(canvas);
looper(game);
