const allNums = (num1, num2) => {
  const arr = [];
  for (let i = num1; i <= num2; i++) {
    arr.push(i);
  }
  const newArr = arr.map((num) => {
    if (num % 3 === 0 && num % 5 === 0) {
      return "foobar";
    }
    if (num % 3 === 0) {
      return "foo";
    }
    if (num % 5 === 0) {
      return "bar";
    }
    return num;
  });
  console.log(newArr);
};

allNums(1, 15);

const number = 123456789

const getPhoneNum = (num) => {
  const str = num + ''

  console.log(`(${str.slice(0, 3)}) ${str.slice(3, 6)}-${str.slice(6, 9)}`)
}

getPhoneNum(123456789)
