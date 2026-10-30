import { Player } from "./player.js";

describe("test player class", () => {
  const testPlayer = new Player();
  
  test.skip("check ships properties", () => {
    expect(testPlayer.battleship1.lengthShip).toBe(3);
  });

  testPlayer.selfGameBoard.placeShip(testPlayer.carrier, [[1,2],[1,3],[1,4]]);

  test.skip("check if square has a ship", () => {
    expect(testPlayer.selfGameBoard.ocean[1][2].ship === testPlayer.carrier).toEqual(true);
    expect(testPlayer.selfGameBoard.ocean[1][3].ship === testPlayer.carrier).toEqual(true);
    expect(testPlayer.selfGameBoard.ocean[1][4].ship === testPlayer.carrier).toEqual(true);
  });

  test.skip("try to place a ship on another ship", () => {
    const placeShipBad = testPlayer.selfGameBoard.placeShip(testPlayer.battleship1, [[1,2], [2,2], [3,2]]);
    expect(placeShipBad).toBe("error");
  });

  testPlayer.selfGameBoard.receiveAttack([1,2]);
  testPlayer.selfGameBoard.receiveAttack([1,3]);
  testPlayer.selfGameBoard.receiveAttack([1,4]);

  test.skip("check if square was struk", () => {
    expect(testPlayer.selfGameBoard.ocean[1][2].struck).toEqual(true);
    expect(testPlayer.selfGameBoard.ocean[1][3].struck).toEqual(true);
    expect(testPlayer.selfGameBoard.ocean[1][4].struck).toEqual(true);
  });

  test.skip("check if the ship is recording its hits taken", () => {
    expect(testPlayer.carrier.hitsTaken).toBe(3);
  });

});