export { Gameboard };

class Gameboard {
  constructor() {
  };

  #squares = [0,1,2,3,4,5,6,7,8,9];
  ocean = this.createOcean();

  createOcean() {
    let tempOcean = [];
    for (let row = 0; row < this.#squares.length; row++) {
      tempOcean[row] = [];
      for (let column = 0; column < this.#squares.length; column++) {
        tempOcean[row][column] = {
          position: [row, column],
          ship: undefined,
          struck: false,
        };
      };
    };
    return tempOcean;
  };

  placeShip(ship) {
    const shipCoordinates = ship.shipCoordinates;

    for (let i = 0; i < shipCoordinates.length; i++) {
      const currSquareCoordinate = shipCoordinates[i];
      const sqare = this.ocean[currSquareCoordinate[0]][currSquareCoordinate[1]];
      sqare.ship = ship;
    };
  };

  receiveAttack(coordinates) {
    const squareHit = this.ocean[coordinates[0]][coordinates[1]];
    squareHit.struck = true;
    if (squareHit.ship !== undefined) {
      squareHit.ship.hit();
    };
    return;
  };

  checkIfAllShipsAreSunk(shipsArr) {
    let status = true;
    for (let i = 0; i < shipsArr.length; i++) {
      if (!(shipsArr[i].sunkStatus)) {
        status = false;
        break;
      };
    };
    return status;
  };
 
};
