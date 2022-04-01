console.clear();
// initial commit Array Methods List
// concat()
// copyWithIn()
// entries()
// every()
// fill()
// filter()
// find()
// findIndex()
// forEach()
// Array.from()
// includes()
// indexOf()
// isArray()
// join()
// lastIndexOf()
// map()
// push()
// pop()
// shift()
// unshift()
// reduce()
// reverse()
// slice()
// some()  
// sort()
// splice()
// toString()
// values()

// 4 ways to check if 'arrays' are equal

const oldNums = [1, 2, 3];
const newNums = [1, 2, 3];

//Method 04: using .length ()

function arrayEquals(oldNums, newNums) {
  return Array.isArray(oldNums) &&
    Array.isArray(newNums) &&
    oldNums.length === newNums.length &&
    oldNums.every((value, index) => value === newNums[index]);
}

console.log(arrayEquals(oldNums, newNums));// true