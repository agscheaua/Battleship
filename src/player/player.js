import { Ship } from "../ship/ship.js";
import { Gameboard } from "../gameboard/gameboard.js";

export { Player }; 

// player class;
class Player {
  constructor() {
  };
  carrier = new Ship(4);
  battleship1 = new Ship(3);
  battleship2 = new Ship(3);
  cruiser1 = new Ship(2);
  cruiser2 = new Ship(2);
  cruiser3 = new Ship(2);

  selfGameBoard = new Gameboard();
  rivalGameBoard = new Gameboard();
};

