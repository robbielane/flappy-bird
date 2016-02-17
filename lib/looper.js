const canvas = document.querySelector('#game');
const events = require('./events');
const scoreboard = require('./scoreboard');

const gameLoop = (game) => {
  if (game.active) {
    game.play();
  } else if (!game.bird.alive) {
    events.startButtonClick(game);
    game.end();
  } else {
    game.start();
  }
  requestAnimationFrame(gameLoop.bind(null, game))
}

module.exports = function (game) {
  scoreboard.populateScoreboard();
  events.startButtonClick(game);
  events.launchJorgeMode(game);
  events.launchBirdMode(game);
  events.addBirdMoveEvents(game);
  requestAnimationFrame(gameLoop.bind(null, game))
}
