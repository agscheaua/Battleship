export {Gameboard};

class Gameboard {
  constructor() {
  };

  #verticesNodes = [0,1,2,3,4,5,6,7,8,9];
  ocean = this.createOcean();

  createOcean() {
    let tempOcean = []

    for (let i = 0; i < this.#verticesNodes.length; i++) {
      for (let j = 0; j < this.#verticesNodes.length; j++) {
        tempOcean.push([i, j]);
      };
    };

    return tempOcean;
  };



};
