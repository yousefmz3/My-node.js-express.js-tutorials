const { readFileSync, writeFileSync } = require('fs');
const path = require('path');


console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');


// console.log(first , second);

writeFileSync('./content/result-sync.txt', 
    `Here is the result ${first} and ${second}`, { flag: 'a' });

console.log('done with this task');
console.log('starting the next one');

const absolute = path.resolve(__dirname,'content', 'result-sync.txt');
console.log(`open this file to check result : \n ${absolute}`);










// const fs = require('fs');
