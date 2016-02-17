const scoreboard = require('./scoreboard');
const collisionSound = new Audio('/assets/sounds/sfx_hit.ogg');

const startButtonClick = (game) => {
  game.canvas.addEventListener('click', function checkForButtonClick(e) {
    if (e.offsetY > 225 && e.offsetY < 290 && e.offsetX > 190 && e.offsetX < 300) {
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
    collisionSound.play();
    game.bird.alive = false;
    game.active = false;
    scoreboard.addScore(game.score.score);
  });


}

module.exports = {
                  startButtonClick: startButtonClick,
                  addBirdMoveEvents: addBirdMoveEvents
                  };
