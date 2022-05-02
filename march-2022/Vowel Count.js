"use strict"


function getCount(str) {
  const regex = /[aieou]/ig;
  const result = str.match(regex);
  return (result) ? result.length : 0;
}
