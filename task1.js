const task1 = [
  "apple",
  "pear",
  "lemon",
  "orange",
  "pineapple",
  "tomato",
  "lettuce",
  "mango",
  "apple",
  "pineapple",
  "lemon",
  "pear",
  "pear",
];

const collectionCount = {
  Apple: 0,
  Pear: 0, 
  Lemon: 0, 
  Orange: 0, 
  Pineapple: 0, 
  Tomatoe: 0, 
  Mango: 0, 
  Banana: 0,
}

task1.forEach(item => {
  const capitalizedName = item[0].toUpperCase() + item.slice(1);
  if (collectionCount[capitalizedName] >= 0) {
    collectionCount[capitalizedName]++
  }
})

console.log(collectionCount)