"use strict"

function getSum( a,b )
{
    const min = a < b ? a : b
    const max = a > b ? a : b
    const arr = []
    for (let i = min; i <= max; i++) {
      arr.push(i)
    }
    return arr.reduce((a,b) => a+b, 0)
}