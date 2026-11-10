import { bothPlayers } from "./UI.js";

describe("test UI module", () => {
  test("check return value of bothPlayers", () => {
    expect(bothPlayers.player.carrier.lengthShip).toBe(4);
    expect(bothPlayers.rival.battleship1.lengthShip).toBe(3);
  });


});