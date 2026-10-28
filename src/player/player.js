export {Player};

import { Ship } from "../ship/ship.js";
import { Gameboard } from "../gameboard/gameboard.js";

class Player {
  constructor() {
    this.carrier = new Ship(4);
    this.battleship1 = new Ship(3);
    this.battleship2 = new Ship(3);
    this.cruiser1 = new Ship(2);
    this.cruiser2 = new Ship(2);
    this.cruiser3 = new Ship(2);
    this.destroyer1 = new Ship(1);
    this.destroyer2 = new Ship(2);
    this.destroyer3 = new Ship(3);
    this.destroyer4 = new Ship(4);

    this.selfGameBoard = new Gameboard();

    this.rivalGameBoard = new Gameboard();
  };
};

const player = new Player();
const computer = new Player();