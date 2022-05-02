"use strict"


      function step(g, m, n) {
      
      for (m; m <= n - g; m++) {
         if (isPrime(m) && isPrime(m + g)) return [m, m+g];
      }
      return null;
      }

      function isPrime(n) {
      for(let i = 2; i <= Math.sqrt(n); i++) {
         if (n % i === 0) return 0;
      }
      return 1;
      }
