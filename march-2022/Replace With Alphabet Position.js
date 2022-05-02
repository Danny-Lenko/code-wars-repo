"use strict"


function alphabetPosition(text) {
  const alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n", "o","p","q","r","s","t","u","v","w","x","y","z"];

  text = text.toLowerCase().match(/[a-z]/g);
  if (!text) return ''
  text = text.map(char => alpha.indexOf(char) + 1);
  return text.join(' ')
}
