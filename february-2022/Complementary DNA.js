"use strict"


      function DNAStrand(dna){
         dna = [...dna];
         dna = dna.map(item => item = (item === 'A') ? 'T' 
               : (item === 'T') ? 'A' 
               : (item === 'G') ? 'C'
               : (item === 'C') ? 'G'
               : null).join('');
         return dna
      }

      console.log(DNAStrand("ATTGC"));
