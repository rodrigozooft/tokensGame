class Token{
  constructor(index, owner){
    this.owner = owner;
    this.id = `token${index}-${owner.id}`;
    this.dropped = false;
  }

  drawHTMLToken(){
    const divElement = document.createElement("div");
    document.getElementById('game-board-underlay').append(divElement);
    divElement.setAttribute('id', this.id);
    divElement.setAttribute('class', 'token');
    divElement.style.backgroundColor = this.owner.color;
  }
  
  get htmlToken(){
    return ``
  }
}
