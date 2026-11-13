import { bothPlayers } from "../game_players/game_players.js";

export {createSquares};
export {changeColorSquaresShipsPlayer};


// create squares of gameboard, assign them classes and data atr, return nothing;
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
      newSquarePlayer.classList.add(`square${rowAndColumStr}`);

      newSquareRival.setAttribute("data-row", tempRow);
      newSquareRival.setAttribute("data-column", tempColumn);
      newSquareRival.classList.add("squareGame");
      newSquareRival.classList.add(`square${rowAndColumStr}`);

      squarePlayer.appendChild(newSquarePlayer);
      squareRival.appendChild(newSquareRival);
    };
  };
};

// change color of squares that ships of player are sitting, on gameboard, return nothing;
function changeColorSquaresShipsPlayer() {
  const allShipsOnPlayerBoard = bothPlayers.player.selfGameBoard.allShipsOnTheGameboard;
    
  for (let i = 0; i < allShipsOnPlayerBoard.length; i++) {
    const currShip = allShipsOnPlayerBoard[i];
    changeColorOfSquaresOneShipSit(currShip);  
  };
};

// change color of squares that a given arg ship is sitting on, return nothing;
function changeColorOfSquaresOneShipSit(ship) {
  for (let i = 0; i < ship.coordinates.length; i++) {
    const currSquare = ship.coordinates[i];

    const rowStr = String(currSquare[0]);
    const columnStr = String(currSquare[1]);

    const squareInBoard = "square" + (rowStr.concat(columnStr));

    const currSquareInGameboard = document.querySelector(`.${squareInBoard}`);
    currSquareInGameboard.style.backgroundColor = "red"; 
  };
};
