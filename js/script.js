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

const oldTags = ['Facebook', 'Twitter', 'LinkedIn', 'YouTube', 'Pinterest', 'Instagram', 'Tumblr', 'Flickr'];
const newTags = ['YouTube', 'Pinterest', 'Instagram', 'Tumblr', 'Flickr', 'Facebook', 'Twitter', 'LinkedIn'];

//Method 02: using .includes()

let array_01_status = true;

oldTags.forEach((value) => {
  array_01_status = array_01_status && newTags.includes(value);
});

let array_02_status = true;

newTags.forEach((value) => {
  array_02_status = array_02_status && oldTags.includes(value);
});

console.log('arrayEquals: ', array_01_status && array_02_status); //  true