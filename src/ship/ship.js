export {Ship};

class Ship {
  constructor(shipName, lengthShip) {
    this.shipName = shipName;
    this.lengthShip = lengthShip;
    this.hitsTaken = 0;
    this.sunkStatus = false;
  };

  hit() {
    this.hitsTaken =+ 1;
    return
  };

  isSunk() {
    if (this.lengthShip === this.hitsTaken) {
      this.sunkStatus = true;
      return true;
    };
    return false;
  };
};