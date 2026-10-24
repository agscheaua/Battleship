import { Ship } from "./ship";

describe("test Ship class", () => {
  const testShipObj = new Ship(4);
  
  test("ship length", () => {
    expect(testShipObj.lengthShip).toBe(4);
  });


});