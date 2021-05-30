task3 = [
  [2,5,1,2,3,5,1,2,4], // Should return 2
  [2,1,1,2,3,5,1,2,4], // Should return 1
  [2,3,4,5], // Should return undefined
  [2,5,5,2,3,5,1,2,4] // Should return 5
]

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
