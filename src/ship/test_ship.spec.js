import { Ship } from "./ship";

describe("test Ship class", () => {
  const testShipObj = new Ship("alebarda", 4);
  
  test("ship name", () => {
    expect(testShipObj.shipName).toBe("alebarda");
  });


});