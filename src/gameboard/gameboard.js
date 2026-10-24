export { Gameboard };

// Gameboard class
class Gameboard {
  constructor() {
  };

  // the indexes of the rows and columns;
  #squares = [0,1,2,3,4,5,6,7,8,9];

  // the 2D array that contains the gameboard, we can access any square with ocean[row][column];
  ocean = this.createOcean();

  // returns a 2D array, that is accesed with ocean[row][column];
  createOcean() {
    let tempOcean = [];
    for (let row = 0; row < this.#squares.length; row++) {
      tempOcean[row] = [];
      for (let column = 0; column < this.#squares.length; column++) {
        tempOcean[row][column] = {
          position: [row, column],
          usable: true,
          ship: undefined,
          struck: false,
        };
      };
    };
    return tempOcean;
  };

  // place a ship in the gameboard, based on an array of coordinates;
  placeShip(ship, coordinatesShip) {
    const areAllSquaresUsable = this.checkIfMultipleSquaresAreUsable(coordinatesShip);
    if (areAllSquaresUsable === false) return "Invalid position";
    

  };

  // can be used with an array that has as items arrays of coordinates for a square,
  // returns true if all squares are empty, otherwise false; 
  checkIfMultipleSquaresAreUsable(squares) {
    let result = true;
    for (let i = 0; i < squares.length; i++) {
      const currSquareCoordinate = squares[i];
      const square = this.ocean[currSquareCoordinate[0]][currSquareCoordinate[1]];
      if (square.usable !== true) {
        result = false;
        break;
      };
    };

    return result;
  };

  // check if a square is empty, returns a boolean;
  checkIfSquareIsUsable(square) {
    if (square.usable !== true) {
      return false;
    } else {
      return true;
    };
  };

  // returns an obj with all rows and columns of squares in form of properties;
  getSquaresRowsAndColumns(squares) {
    let rowsSquares = [];
    let columnsSquares = [];

    for (let i = 0; i < squares.length; i++) {
      if (rowsSquares.includes(squares[i][0]) === false) {
        rowsSquares.push(squares[i][0]);
      };
      if (columnsSquares.includes(squares[i][1]) === false) {
        columnsSquares.push(squares[i][1]);
      };
    };

    return {
      rowsSquares,
      columnsSquares,
    };
  };

  // get us the possition in witch the ship will be placed on the gameboard;
  checkAlignmentOfSquares(squares) {
    const squaresRowsAndColumns = this.getSquaresRowsAndColumns(squares);

    const rowsSquares = squaresRowsAndColumns.rowsSquares;
    const columnsSquares =squaresRowsAndColumns.columnsSquares;

    let rowsLength = rowsSquares.length;
    let columnsLength = columnsSquares.length;

    let alignment;

    if (rowsLength === 1 && columnsLength > 1) {
      alignment = "horizontal";
    } else if (rowsLength > 1 && columnsLength === 1) {
      alignment = "vertical";
    } else if (rowsLength === 1 && columnsLength === 1) {
      alignment = "neutral";
    } else {
      return false;
    };
    return alignment;
  };

  // receive attack, change the square struk status as true, and run hit() method on ship if exist; 
  receiveAttack(coordinates) {
    const squareHit = this.ocean[coordinates[0]][coordinates[1]];
    squareHit.usable = false;
    squareHit.struck = true;
    if (squareHit.ship !== undefined) {
      squareHit.ship.hit();
    };
    return;
  };

  // receive as argument an array of all the ships, and read their sunk status, returns a boolean;
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
