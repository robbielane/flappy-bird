const scoreboard = require('./scoreboard');
const collisionSound = new Audio();
const $ = require('jquery')

const startButtonClick = (game) => {
  game.canvas.addEventListener('click', function checkForButtonClick(e) {
    if (e.offsetY > 225 && e.offsetY < 290 && e.offsetX > 190 && e.offsetX < 300) {
      game.canvas.removeEventListener('click', checkForButtonClick);
      game.reset();
      }
  });
}

const launchJorgeMode = (game) => {
  window.addEventListener('keydown', function(e) {
    if (e.which === 74) {
      e.preventDefault();
      $('body').addClass('jorge')
      game.bird.jorgeMode();
      game.pipes[0].mode = 'jorge';
      game.pipes[1].mode = 'jorge';
    }
  });
}

const launchBirdMode = (game) => {
  window.addEventListener('keydown', function(e) {
    if (e.which === 66) {
      e.preventDefault();
      $('body').removeClass('jorge')
      game.bird.birdMode();
      game.pipes[0].mode = 'bird';
      game.pipes[1].mode = 'bird';
    }
  });
}

const addBirdMoveEvents = (game) => {
  game.score.increment;
  game.canvas.addEventListener('click', () => { game.bird.spacebarPress });
  document.addEventListener('keydown', (e) => {
    if (e.which == 32) {
      e.preventDefault();
      game.bird.spacebarPress
    }
  });
  game.collision.on('collisionEvent', () => {
    collisionSound.src = `/assets/sounds/${game.bird.mode}-hit.ogg`;
    collisionSound.play();
    game.bird.alive = false;
    game.active = false;
    scoreboard.addScore(game.score.score);
  });


}

module.exports = {
                  startButtonClick: startButtonClick,
                  addBirdMoveEvents: addBirdMoveEvents,
                  launchJorgeMode: launchJorgeMode,
                  launchBirdMode: launchBirdMode
                  };
