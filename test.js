// spread
const arr = ["V", "D"];
console.log(["C", ...arr]);

// rest
const log = (...rest) => {
  console.log(rest);
};

log("V", "D", "C");

// in vs. hasOwnProperty
// const test = new Object()
// test.prop = 'just test'

// console.log('prop' in test)
// console.log('toString' in test)

// console.log(test.hasOwnProperty('prop'))
// console.log(test.hasOwnProperty('toString'))

const person = {
  name: "John",
};

Object.freeze(person);
person.name = "Jack";
console.log(person.name);

const fruit = [
  "banana",
  "grapefruit",
  "orange",
  "banana",
  "grapefruit",
  "banana",
];

const cats = [
   { id: 1, category: "A", name: "Item 1" },
   { id: 2, category: "B", name: "Item 2" },
   { id: 3, category: "A", name: "Item 3" },
   { id: 4, category: "C", name: "Item 4" },
   { id: 5, category: "B", name: "Item 5" },
 ];

const sliceCats = cats.slice(1, 4)

sliceCats[0].name = 'Hello'

console.log(cats)


