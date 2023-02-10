class Token{
  constructor(index, owner){
    this.owner = owner;
    this.id = `token${index}-${owner.id}`;
    this.dropped = false;
    this.columnLocation = 0;
  }

  drawHTMLToken(){
    const divElement = document.createElement("div");
    document.getElementById('game-board-underlay').append(divElement);
    divElement.setAttribute('id', this.id);
    divElement.setAttribute('class', 'token');
    divElement.style.backgroundColor = this.owner.color;
  }
  
  get htmlToken(){
    return document.getElementById(this.id);
  }

  /**
   * Gets left offset of html element.
   * @return {number} Left offset of token object's htmlToken.
   */
  offsetLeft(){
  return this.htmlToken.offsetLeft;
  }

  moveLeft(){
    if(this.columnLocation > 0){
      this.htmlToken.style.left = this.offsetLeft - 76;
      this.columnLocation -= 1;
    }
  }

  moveRight(columns){
    if(this.columnLocation < columns -1){
      this.htmlToken.style.left = this.offsetLeft + 76;
      this.columnLocation += 1;
    }
  }
}
