const game = new Game();

/**
 * Listens for click on `#begin-game` and calls StartGame() on game object
 */

const button = document.getElementById('begin-game');

button.addEventListener('click', function(){
  game.startGame();

  this.style.display = 'none';
  document.getElementById('play-area').style.opacity = '1';
})

/**
 * Listen for keyboard presses
 */

document.addEventListener('keydown', function(e){
  game.handleKeydown(e);
})
