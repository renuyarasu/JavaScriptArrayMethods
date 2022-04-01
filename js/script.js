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

//Method 04: using _.isEqual() form Lodash

console.log('arrayEquals: ', _.isEqual(oldTags.sort(), newTags.sort())); //true