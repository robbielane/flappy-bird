const canvas = document.getElementById('game');
const konami = require('./konami');
const looper = require('./looper');
const Game = require('./game');

konami();

let game = new Game(canvas);
looper(game);
