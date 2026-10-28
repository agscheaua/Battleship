export { Gameboard };

// Gameboard class
class Gameboard {
  constructor() {
  };

  // the indexes of the rows and columns;
  #squares = [0,1,2,3,4,5,6,7,8,9];

  // the 2D array that contains the gameboard, we can access any square with ocean[row][column];
  ocean = this.createOcean();
  missedShots = [];
  allShipsOnTheGameboard = [];

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
    if (this.checkIfMultipleSquaresAreUsable(coordinatesShip) === false) return "Invalid position, unusuable square";
    if (this.checkAlignmentCorrectness(coordinatesShip) === false) return "Invalid position, not in sequence";
    
    for (let i = 0; i < coordinatesShip.length; i++) {
      const currSquare = coordinatesShip[i];
      this.ocean[currSquare[0]][currSquare[1]].ship = ship;
      this.ocean[currSquare[0]][currSquare[1]].usable = false;
      ship.coordinates.push(coordinatesShip[i]);
    };

    this.makeSquaresUnusuable(coordinatesShip);
  };

  // can be used with an array that has as items arrays of coordinates for a square,
  // returns true if all squares are empty, otherwise false; 
  checkIfMultipleSquaresAreUsable(squares) {
    let result = true;
    for (let i = 0; i < squares.length; i++) {
      const currSquareCoordinate = squares[i];
      const square = this.ocean[currSquareCoordinate[0]][currSquareCoordinate[1]];
      if (square.usable !== true || square === undefined) {
        result = false;
        break;
      };
    };
    return result;
  };

  // check if a square is empty, returns a boolean;
  checkIfSquareIsUsable(square) {
    if (this.ocean[square[0]][square[1]].usable !== true ||
        this.ocean[square[0]][square[1]] === undefined) {
      return false;
    } else {
      return true;
    };
  };

  // returns an obj with all rows and columns of squares in form of properties;
  getSquaresRowsAndColumns(squares) {
    let rowsIndices = [];
    let columnsIndices = [];

    for (let i = 0; i < squares.length; i++) {
      if (rowsIndices.includes(squares[i][0]) === false) {
        rowsIndices.push(squares[i][0]);
      };
      if (columnsIndices.includes(squares[i][1]) === false) {
        columnsIndices.push(squares[i][1]);
      };
    };

    return {
      rowsIndices,
      columnsIndices,
    };
  };

  // get us the possition in witch the ship will be placed on the gameboard,
  // if the squares are not place one after another, returns false;
  getAlignmentOfSquares(squares) {
    const squaresRowsAndColumns = this.getSquaresRowsAndColumns(squares);

    let rowsLength = squaresRowsAndColumns.rowsIndices.length;
    let columnsLength = squaresRowsAndColumns.columnsIndices.length;

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

  // check the correctness of the sequence in with the row val or column val are ordered;
  checkAlignmentCorrectness(squares) {
    const squaresRowsAndColumns = this.getSquaresRowsAndColumns(squares);
    const squaresAlignement = this.getAlignmentOfSquares(squares);

    let areCorrectlyAligned = true;

    if (squaresAlignement === false) return false;
    if (squaresAlignement === "neutral") return true;

    if (squaresAlignement === "horizontal") {
      const currColumnIndices = squaresRowsAndColumns.columnsIndices;
      for (let i = 0; i < currColumnIndices.length; i++) {
        if (i === 0) continue;
        if (currColumnIndices[i] !== currColumnIndices[i - 1] + 1) {
          areCorrectlyAligned = false;
          break;
        };
      };
      return areCorrectlyAligned;
    };

    if (squaresAlignement === "vertical") {
      const currRowsIndices = squaresRowsAndColumns.rowsIndices;
      for (let i = 0; i < currRowsIndices.length; i++) {
        if (i === 0) continue;
        if (currRowsIndices[i] !== currRowsIndices[i - 1] + 1) {
          areCorrectlyAligned = false;
          break;
        };
      };
      return areCorrectlyAligned;
    }
  };

  // make squares that are near a ship unusuable;
  makeSquaresUnusuable(squares) {
    for (let i = 0; i < squares.length; i++) {
      this.makeAllSquareNeighboursUnusuable(squares[i]);
    };
  };

  // make all the neighbours of a given square unusuable;
  makeAllSquareNeighboursUnusuable(sqare) {
    const currSquare = this.ocean[sqare[0]][sqare[1]].position;

    const currSquareRow = currSquare[0];
    const currSquareColumn = currSquare[1];

    let allNeighbourSquares = [];
    allNeighbourSquares.push([currSquareRow - 1, currSquareColumn - 1]);
    allNeighbourSquares.push([currSquareRow -1, currSquareColumn]);
    allNeighbourSquares.push([currSquareRow - 1, currSquareColumn + 1]);
    allNeighbourSquares.push([currSquareRow, currSquareColumn - 1]);
    allNeighbourSquares.push([currSquareRow, currSquareColumn + 1]);
    allNeighbourSquares.push([currSquareRow + 1, currSquareColumn - 1]);
    allNeighbourSquares.push([currSquareRow + 1, currSquareColumn]);
    allNeighbourSquares.push([currSquareRow + 1, currSquareColumn + 1]);

    for (let i = 0; i < allNeighbourSquares.length; i++) {
      if (this.ocean[allNeighbourSquares[i][0]] === undefined) continue;
      if (this.ocean[allNeighbourSquares[i][0]][allNeighbourSquares[i][1]] === undefined) continue;
      
      this.ocean[allNeighbourSquares[i][0]][allNeighbourSquares[i][1]].usable = false;
    };
  };

  // receive attack, change the square struk status as true, and run hit() method on ship if exist; 
  receiveAttack(coordinates) {
    const squareHit = this.ocean[coordinates[0]][coordinates[1]];
    squareHit.usable = false;
    squareHit.struck = true;
    if (squareHit.ship !== undefined) {
      squareHit.ship.hit();
    } else if (squareHit.ship === undefined) {
      this.missedShots.push(squareHit);
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
