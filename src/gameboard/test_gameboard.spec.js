import { Gameboard } from "./gameboard";
import { Ship } from "../ship/ship.js";

describe("test Gameboard class", () => {
  const testGameboard = new Gameboard();
  const testShip = new Ship();

  test.skip("check gameboard squares, only works when ocean prop is public", () => {
    expect(testGameboard.ocean[0][0].position).toEqual([0, 0]);
  });

  test.skip("check placement of ships in the gameboard", () => {


  });

  const coordinates = [
    [1,2],
    [1,3],
    [1,4],
  ];
  const coordinatesOfRowsAndColl = testGameboard.getSquaresRowsAndColumns(coordinates);
  
  test("check the rows and columns of any given coordinates", () => {
    expect(coordinatesOfRowsAndColl.rowsSquares).toEqual([1]);
    expect(coordinatesOfRowsAndColl.columnsSquares).toEqual([2, 3, 4]);
  });

  testGameboard.receiveAttack([1, 2]);

  test.skip("check if square strucked status changes", () => {
    expect(testGameboard.ocean[1][2].struck).toEqual(true);
  });

  test.skip("check if ship obj hit nr increased", () => {
    expect(testShip.hitsTaken).toEqual(1);
  });

  test.skip("check if all ships are sunk", () => {
    expect(testGameboard.checkIfAllShipsAreSunk([testShip])).toEqual(false);
  });


});