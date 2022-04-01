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

//Method 01: using .sort() | .join()
const array_01 = oldTags.sort().join();
const array_02 = newTags.sort().join();
console.log('arrayEquals: ', array_01 === array_02); //true

