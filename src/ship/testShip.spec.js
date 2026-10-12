import {Ship} from "./ship";

describe("test Ship class", () => {
  const testShip = new Ship("alebarda", 5);
  test("test 1", () => {
    expect(testShip.shipName).toBe("alebarda");
  });


});