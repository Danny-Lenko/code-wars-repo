"use strict"

function vowelIndices(word){
   const vowels = ['a','e','o','u','y','i']
   const arr = []
   word = word.toLowerCase().split('')
   
   word.forEach((char,i) => {
     if (vowels.includes(char)) arr.push(i+1)
   })
   return arr
 }