"use strict"

function defineSuit(card) {
   card = card.match(/[♣♦♥♠]/)[0]
   
   return card === "♣" ? "clubs"
     : card === "♦" ? "diamonds"
     : card === "♥" ? "hearts"
     : "spades"
 }