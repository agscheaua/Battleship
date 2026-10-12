import {Gameboard} from "./gameboard";

describe("test Gameboard class", () => {
  const testGameboard = new Gameboard();

  test("test gameboard sqares", () => {
    expect(testGameboard.ocean[testGameboard.ocean.length - 1]).toEqual([9,9]);
  })
})