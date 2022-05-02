"use strict"


function howMuchILoveYou(nbPetals) {
    const feelings = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
    const numFlowers = nbPetals / 6
    let petals = []
    for (let i = 0; i < numFlowers; i++) {
      petals.push(...feelings)
    }
  
    return petals[nbPetals - 1]
}
