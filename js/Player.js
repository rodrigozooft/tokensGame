class Player {
  constructor(name, id, color, active = false){
    this.name = name;
    this.id = id;
    this.color = color;
    this.active = active;
    this.tokens = createTokens(21);
  }
  createTokens(num){
    const tokens = [];

    for(n = 0; n < num; n++){
      let token = new Token(n, this);
      tokens.push(token)
    }
    return tokens;
  }
}

player = new Player('Rod', 81, 'red', true);
console.log(player);
