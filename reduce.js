const fruit = [
  "banana",
  "grapefruit",
  "orange",
  "banana",
  "grapefruit",
  "banana",
];

const numbers = [1, 2, 3, 15, 4, 5, 6, 7, 8];

const countedFruits = countEls(fruit);

console.log(countedFruits);

const getUnique = (arr) => {
  const result = arr.reduce((acc, item, i) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);

  console.log(result);
};

const getMax = (arr) => {
  const result = arr.reduce((acc, item) => {
    return acc > item ? acc : item;
  });

  console.log(result);
};

const getAverage = (arr) => {
  const result = arr.reduce((acc, item) => {
    acc = acc + item;
    return acc;
  }, 0);

  console.log((result / arr.length).toFixed(2));
};

function countEls(arr) {
  const result = arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  return result;
}

function flattenArr(arr) {
  const result = arr.reduce((acc, item) => {
    for (const el of item) {
      acc.push(el);
    }
    return acc;
  }, []);

  console.log(result);
}

flattenArr(Object.entries(countedFruits));

const concatenate = (arr) => {
  const result = arr.reduce((acc, item) => {
    acc = acc + " " + item;
    return acc;
  });

  console.log(result);
};

// ============================ smarter

const cats = [
  { id: 1, category: "A", name: "Item 1" },
  { id: 2, category: "B", name: "Item 2" },
  { id: 3, category: "A", name: "Item 3" },
  { id: 4, category: "C", name: "Item 4" },
  { id: 5, category: "B", name: "Item 5" },
];

const group = (arr) => {
  const result = arr.reduce((acc, item) => {
    const { id, category, name } = item;

    acc[category] = !acc[category]
      ? [{ id, name }]
      : [...acc[category], { id, name }];

    return acc;
  }, {});

  console.log(result);
};

group(cats);
