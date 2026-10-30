import { Player } from "../player/player.js";

export {createSquares};

// returns an obj containg the player and the rival;
const players = function() {
  const player = new Player();
  const rival = new Player();

  return {
    player,
    rival,
  };
};

// players.player.carrier.coordinate = [[1,2], [1,3], [1,4], [1,5]];
// players.rival.carrier.coordinate = [[3,2], [3,3], [3,4], [3,5]]; 

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

      newSquarePlayer.setAttribute("data-row", tempRow);
      newSquarePlayer.setAttribute("data-column", tempColumn);
      newSquareRival.setAttribute("data-row", tempRow);
      newSquareRival.setAttribute("data-column", tempColumn);

      squarePlayer.appendChild(newSquarePlayer);
      squareRival.appendChild(newSquareRival);
    };
  };
};
