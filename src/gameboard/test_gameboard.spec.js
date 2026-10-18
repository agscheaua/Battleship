import { Gameboard } from "./gameboard";
import { Ship } from "../ship/ship.js";

describe("test Gameboard class", () => {
  const testGameboard = new Gameboard();
  const testShip = new Ship();

  test("gameboard sqares, only works with ocen prop is public", () => {
    expect(testGameboard.ocean[0][0].position).toEqual([0, 0]);
  });

  testShip.shipCoordinates.push([1, 2], [1, 3], [1, 4]);
  testGameboard.placeShip(testShip);

  test("place ship in a sqare", () => {
    expect(testGameboard.ocean[1][2].ship).toEqual(testShip);
  });

  testGameboard.receiveAttack([1, 2]);

  test("check if sqare strucked status changes", () => {
    expect(testGameboard.ocean[1][2].struck).toEqual(true);
  });

  test("check if ship obj hit nr increased", () => {
    expect(testShip.hitsTaken).toEqual(1);
  });

  test("check if all ships are sunk", () => {
    expect(testGameboard.checkIfAllShipsAreSunk([testShip])).toEqual(false);
  });


});