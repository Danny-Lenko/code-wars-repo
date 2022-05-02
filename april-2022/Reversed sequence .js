"use strict"


const reverseSeq = n => {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.unshift(i);
  }
  return arr;
};
