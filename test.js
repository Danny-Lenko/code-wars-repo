// spread
const arr = ['V', 'D']
console.log(['C', ...arr])

// rest
const log = (...rest) => {
   console.log(rest)
}

log('V', 'D', 'C')

// in vs. hasOwnProperty
// const test = new Object()
// test.prop = 'just test'

// console.log('prop' in test)
// console.log('toString' in test)

// console.log(test.hasOwnProperty('prop'))
// console.log(test.hasOwnProperty('toString'))


const person = {
   name: "John"
}

Object.freeze(person)
person.name = "Jack"
console.log(person.name)
