export {Player};

import { Ship } from "../ship/ship.js";
import { Gameboard } from "../gameboard/gameboard.js";

class Player {
  constructor() {
    this.carrier4 = new Ship("Carrier", 4);
    this.battleship3_1 = new Ship("Battleship_1", 3);
    this.battleship3_2 = new Ship("Battleship_2", 3);
    this.cruiser2_1 = new Ship("Cruiser_1", 2);
    this.cruiser2_2 = new Ship("Cruiser_2", 2);
    this.cruiser2_3 = new Ship("Cruiser_3", 2);
    this.destroyer1_1 = new Ship("Destroyer_1", 1);
    this.destroyer1_2 = new Ship("Destroyer_2", 2);
    this.destroyer1_3 = new Ship("Destroyer_3", 3);
    this.destroyer1_4 = new Ship("Destroyer_4", 4);

    this.selfGameBoard = new Gameboard();

    this.rivalGameBoard = new Gameboard();
  };
};