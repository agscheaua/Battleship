export { Ship };

// Ship class;
class Ship {
  constructor(lengthShip) {
    this.lengthShip = lengthShip;
    this.hitsTaken = 0;
    this.sunkStatus = false;
    this.coordinates = [];
  };

  // increment with 1 the val of hitsTaken property, returns nothing;
  hit() {
    this.hitsTaken += 1;
    return;
  };

  // check if the ship have been sunk, by reading the sunkStatus propery, return a boolean; 
  isSunk() {
    if (this.lengthShip === this.hitsTaken) {
      this.sunkStatus = true;
      return true;
    };
    return false;
  };
};