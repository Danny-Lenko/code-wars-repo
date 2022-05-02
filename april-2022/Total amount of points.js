"use strict"


function points(games) {
    return games.map(score => {
    return (score[0] > score[2]) ? 3 : (score[0] < score[2]) ? 0 : 1
  }).reduce((a,b)=>a+b,0)
}
