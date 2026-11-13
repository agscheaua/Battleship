import { Player } from "../player/player.js";

export { bothPlayers };

// returns an obj containg the player and the rival;
function createPlayers() {
  const player = new Player();
  const rival = new Player();

  return {
    player,
    rival,
  };
};

// reference to the player and rival obj;
const bothPlayers = createPlayers();

// create two ships to test the functionality of the UI;
bothPlayers.player.selfGameBoard.placeShip(bothPlayers.player.carrier, [[1,2], [1,3], [1,4], [1,5]]);
bothPlayers.player.selfGameBoard.placeShip(bothPlayers.player.battleship1, [[4,4], [5,4], [6,4]]);

bothPlayers.rival.selfGameBoard.placeShip(bothPlayers.rival.carrier, [[1,2], [1,3], [1,4], [1,5]]); 
bothPlayers.rival.selfGameBoard.placeShip(bothPlayers.rival.battleship1, [[4,4], [5,4], [6,4]]);

