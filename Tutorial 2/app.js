const _ = require('lodash');
const items = [1, [2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log('Hello World');
console.log('Hello Again');
console.log('Hello for the third time'); 
console.log('Final Hello');
console.log('Goodbye!');