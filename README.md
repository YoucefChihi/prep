# Task 1

Count how many Apples, Pears, Lemons, Oranges, Pineapples, Tomatoes, Mangos and Bananas are in the list.

```javascript
Expected output:
Apple: 2,
Pear: 3
Lemon: 2,
Orange: 1,
Pineapple: 2,
Tomato: 1,
Mango: 1
Banana: 0
```

```javascript
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
```

## Solution

```javascript
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
```

# Task 2

a) What is the performance, in terms of, Big O notation, of the below code?
b) Write a solution that has better performance
c) What is the performance of your new solution?

```javascript
const domains = { // Example to show data shape only.
  "one.com": { policy: "block" },
  "two.com": { policy: "none" },
  "three.com": { policy: "none" },
  "four.com": { policy: "block" },
}

const getBlockPolicyState = (domains) => {
  numDomains = Object.keys(domains).length;
  for (let i = 0; i < numDomains; i++) {
    policyArr.push(Object.entries(domains)[i][1].policy);
  }
  oneDomain = policyArr.some((item) => item === "block");
  allDomains = policyArr.every((item) => item === "block");
  return { oneDomain, allDomains };
};
```

## Solution

a) `Object.keys`, `for` loop, `some` and `every` all have O(n) complexity, but inside the `for` loop we've got `Object.entries` which has O(n), which makes the whole complexity O(n^2)

b)
```javascript
const getBlockPolicyState = (domains) => {
  let oneDomain = false
  let allDomains = true
  Object.entries(domains).forEach(entry => {
    const {policy} = entry[1]
    const isBlockPolicy = policy === 'block'
    oneDomain = oneDomain || isBlockPolicy
    allDomains = allDomains && isBlockPolicy
  })
  return { oneDomain, allDomains };
};
```

c) The optimized solution has O(n) complexity

# Task 3

Find the first recurring character of the below lists

```javascript
task8 = [
  [2,5,1,2,3,5,1,2,4], Should return 2
  [2,1,1,2,3,5,1,2,4], Should return 1
  [2,3,4,5], Should return undefined
  [2,5,5,2,3,5,1,2,4] Should return 5
]
```

## Solution

```javascript
task3.forEach(list => {
  const occurenceMap = {}
  let firstReccurring
  let i = 0
  while (i < list.length && firstReccurring === undefined) {
    const item = list[i]
    if (occurenceMap[item]) {
      firstReccurring = item
    } else {
      occurenceMap[item] = true
    }
    i++
  }
  console.log(firstReccurring)
})
```