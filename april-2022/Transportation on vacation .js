"use strict"


export function rentalCarCost(d) {
  const total = d * 40
  return (d < 3) ? total
    : (d >=3 && d < 7) ? total - 20
    : total - 50
}
