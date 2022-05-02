"use strict"


function format(text, width) {

let formatText = text.replace(/\n/g, ' ').split(' ');

let newArr = [];
let word;
let newestArr = [];

while(formatText.length > 0) {

  while (newArr.reduce((a,b)=>a+b.length,0) < width 
    && formatText.length > 0) {
    word = formatText.splice(0, 1);
    newArr.push(word);
    newArr = newArr.flat();
  }

  newestArr.push(newArr.splice(0));

}

  newestArr.forEach((arr, index, bigarr) => {

    if (arr.reduce((a,b) => a+b.length,0) > width) {
      while(arr.reduce((a,b) => a+b.length,0) > width) {
        bigarr[index + 1].unshift(arr.pop());
      }
    }
  
  })


console.log(newArr);
console.log(newestArr); 

console.log(formatText);
console.log(text);
}


console.log(format(`Lorem ipsum dolor sit amet, consectetur adipiscing
elit. Aliquam nec consectetur risus. Cras vel urna
a tellus dapibus consequat. Duis bibendum
tincidunt viverra. Phasellus dictum efficitur sem
quis porttitor. Mauris luctus auctor diam id
ultrices. Praesent laoreet in enim ut placerat.
Praesent a facilisis turpis.`, 30));
