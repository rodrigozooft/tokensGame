class Game {
  constructor(){
    this.board = new Board();
    this.players = this.createPlayers();
    this.ready = false;
  }

  /**
   * Creates two player objects
   * @return {Array} An array of two Player objects
   */

  createPlayers(){
    const players = [];
    const player1 = new Player('Player 1', '#e15258', 1, true)
    const player2 = new Player('Player 2', '#e59a13', 2) 
    players.push(player1);
    players.push(player2);

    return players;
  }

  get activePlayer(){
    return this.players.find(player => player.active);
  }
  /*
   * Begins game 
   */
  startGame(){
    this.board.drawHTMLBoard();
    this.activePlayer.activeToken.drawHTMLToken();
    this.ready = true;
  }

  /**
   * Branches code, depending on what key player presses
   * @param {Object}e - Keydown event object
   */
  handleKeyDown(e){
   if(this.ready){
     if(e.key === 'ArrowLeft'){
        // move left
       this.activePlayer.activeToken.moveLeft();
     }else if(e.key === 'ArrowRight'){
        // move rightt
       this.activePlayer.activeToken.moveRight(this.board.columns);
     }else if(e.key === 'ArrowDown'){
        // play token 

     }
   }
  }
}
