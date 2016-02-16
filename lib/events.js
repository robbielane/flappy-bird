const scoreboard = require('./scoreboard');

const startButtonClick = (game) => {
  game.canvas.addEventListener('click', function checkForButtonClick(e) {
    if (e.y > 225 && e.y < 290 && e.x > 190 && e.x < 300) {
      game.canvas.removeEventListener('click', checkForButtonClick);
      game.reset();
      }
  });
}

const addBirdMoveEvents = (game) => {
  game.score.increment;
  game.canvas.addEventListener('click', () => { game.bird.spacebarPress });
  document.addEventListener('keydown', (e) => {
    if (e.which == 32) { game.bird.spacebarPress }
  });
  game.collision.on('collisionEvent', () => {
    game.bird.alive = false;
    game.active = false;
    scoreboard.addScore(game.score.score);
  });


}

module.exports = {
                  startButtonClick: startButtonClick,
                  addBirdMoveEvents: addBirdMoveEvents
                  };
