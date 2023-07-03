const castAppeal = (phrase) => {
  return (name) => `${phrase} ${name}`;
};

const greet = castAppeal("Hi,");
console.log(greet("Sam"));

const count = (counter) => {
  return function add(num) {
    return (counter += num);
  };
};

const start = count(1);
console.log(start(1));
console.log(start(1));
