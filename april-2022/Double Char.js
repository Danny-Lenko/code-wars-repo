"use strict"


function doubleChar(str) {
    return str.split('').map(letter => letter+letter).join('')
}
