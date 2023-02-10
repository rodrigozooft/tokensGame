const game = new Game();

/**
 * Listens for click on `#begin-game` and calls StartGame() on game object
 */

const button = document.getElementById('begin-game');

button.addEventListener('click', () => {
  game.startGame();

  this.style.display = 'none';
  document.getElementById('play-area').style.opacity = '1';
})
