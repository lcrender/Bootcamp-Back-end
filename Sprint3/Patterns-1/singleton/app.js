const Player = require("./models/Player");
const Game = require("./models/Game");
// Creo Juego
const game1 = new Game("Best Point Game");
// Creo Jugadores
let player1 = new Player("Burrito Ortega");
let player2 = new Player("Diego Armando M.");
let player3 = new Player("Mac Allister");
// Agrego Jugadores al Juego
game1.addPlayer(player1);
game1.addPlayer(player2);
game1.addPlayer(player3);
// Muestro Jugadores
console.log(`\n${game1.score.players} \n`);
// Agrego y quito puntos a los jugadores
game1.addPoints(player1)
game1.subPoints(player1);
game1.subPoints(player2);
game1.subPoints(player3);
// Muestro Marcador de resultados
console.table(game1.showPoints());
// Muestro al ganador
console.log(game1.viewWinner());