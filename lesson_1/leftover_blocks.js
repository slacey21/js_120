function calculateLeftoverBlocks(numBlocks) {
  let blocksUsed = 0;
  let layersCreated = 1;
  
  while (blocksUsed + Math.pow(layersCreated, 2) <= numBlocks) {
    blocksUsed += Math.pow(layersCreated, 2);
    layersCreated += 1;
  }

  return numBlocks - blocksUsed;
}


console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true
