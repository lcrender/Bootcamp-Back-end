class Score {
  constructor() {
    this.scores = [];
    this.players = [];
    if (typeof Score.instance === "object"){
      return Score.instance;
    }
   Score.instance = this;
   return this;
  }
viewScore() 
{
  return this.Score;
}
};
module.exports = Score; 