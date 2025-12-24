const { readFile, writeFile } = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);




// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);
//                 return;
//             } else {
//                 resolve(data);
//             }
//         });
//     })
// }

const start = async () => {
    try {
        const first = await readFilePromise('../Tutorial 1/content/first.txt', 'utf8');
        const second = await readFilePromise('../Tutorial 1/content/second.txt', 'utf8');
        await writeFilePromise('./content/result-async.txt',
            `Here is the result : ${first} , ${second}`, { flag: 'a' });
        console.log(first);
        console.log(second);
    } catch (error) {
        console.log(error);
    }
}

start();

// getText('../Tutorial 1/content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));


