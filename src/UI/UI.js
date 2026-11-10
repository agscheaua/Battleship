import { Player } from "../player/player.js";

export {createSquares};
export {changeSquaresColorShipIsOnThem};

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
bothPlayers.rival.selfGameBoard.placeShip(bothPlayers.rival.carrier, [[3,1], [4,1], [5,1], [6,1]]); 

// create the squares of the gameboard and assign them class and data atr.;
function createSquares() {
  const squaresIndices = [0,1,2,3,4,5,6,7,8,9];

  const squarePlayer = document.querySelector(".playerBoard");
  const squareRival = document.querySelector(".rivalBoard");

  for (let row = 0; row < squaresIndices.length; row++) {
    const tempRow = row;
    for (let column = 0; column < squaresIndices.length; column++) {
      const tempColumn = column;

      const newSquarePlayer = document.createElement("div");
      const newSquareRival = document.createElement("div");

      const rowAndColumStr = String(tempRow).concat(String(tempColumn));
      console.log(rowAndColumStr);

      newSquarePlayer.setAttribute("data-row", tempRow);
      newSquarePlayer.setAttribute("data-column", tempColumn);
      newSquarePlayer.classList.add("squareGame");
      newSquarePlayer.classList.add(`${rowAndColumStr}`);

      newSquareRival.setAttribute("data-row", tempRow);
      newSquareRival.setAttribute("data-column", tempColumn);
      newSquareRival.classList.add("squareGame");
      newSquareRival.classList.add(`${rowAndColumStr}`);

      squarePlayer.appendChild(newSquarePlayer);
      squareRival.appendChild(newSquareRival);
    };
  };
};

// change color of the squares that the ships are sitting on the player gameboard;
function changeSquaresColorShipIsOnThem() {
  const allShipsOnPlayerBoard = bothPlayers.player.selfGameBoard.allShipsOnTheGameboard;
    
  for (let i = 0; i < allShipsOnPlayerBoard.length; i++) {
    const currShip = allShipsOnPlayerBoard[i];
    changeColorOfSquaresOneShipSit(currShip);  
  };
};

// change the color of squares that a specific ship is sitting on;
function changeColorOfSquaresOneShipSit(ship) {
  for (let i = 0; i < ship.coordinates.length; i++) {
    const currSquare = ship.coordinates[i];

    const rowStr = String(currSquare[0]);
    const columnStr = String(currSquare[1]);

    const rowAndColumnStr = rowStr.concat(columnStr);

    const currSquareInGameboard = document.querySelector(`.00`);
    currSquareInGameboard.style.backgroundColor = "red"; 
  };
};
