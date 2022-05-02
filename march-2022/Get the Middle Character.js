"use strict"


function getMiddle(s) {
  const half = s.length / 2;
  const oddMiddle = s.slice(half, half + 1);
  const evenMiddle = s.slice(Math.floor(half - 1), Math.floor(half + 1))
  return (s.length % 2 > 0) ? oddMiddle : evenMiddle
}
