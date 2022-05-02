"use strict"


function paperwork(n, m) {
  if (n < 0 && m < 0) return 0
  const pages = n * m;
  return (pages > 0) ? pages : 0
}