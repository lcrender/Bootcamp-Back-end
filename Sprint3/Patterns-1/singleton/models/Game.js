const Player = require("./Player");
const Score = require("./Score");
class Game {
    constructor(name){
        this.name = name;
        this.score= new Score;
    };
    addPlayer(player) {
        if(player instanceof Player){
            this.score.players.push(player.name);
            this.score.scores.push(0);
        }
    }
    addPoints(player){
        let playerIndex = this.score.players.indexOf(player.name);
            if(playerIndex !== -1) {
                this.score.scores[playerIndex] += 1;
            }
        } 
    subPoints(player) {
        let playerIndex = this.score.players.indexOf(player.name);
        if(playerIndex !== -1){
            this.score.scores[playerIndex] -= 1;
        }
    }
    showPoints(){
        return this.score;
    }
    viewWinner() {
    const hiScore = Math.max(...this.score.scores);
    const playerIndex = this.score.scores.indexOf(hiScore);
    return (`\n${this.name}*\nGanador: ${this.score.players[playerIndex]}\n`); 
    }
}
module.exports = Game; 