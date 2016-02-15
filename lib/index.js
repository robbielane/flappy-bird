const canvas = document.getElementById('game');

const Looper = require('./looper');
const Game = require('./game');

let game = new Game(canvas);
Looper(game);
