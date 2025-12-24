const os = require('os');
//info about current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds
console.log(`The system uptime is ${(os.uptime() / 60).toFixed(0)} minutes`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2), //GB
    freeMem: (os.freemem() / (1024 * 1024 * 1024)).toFixed(2),   //GB
    usedMem: ((os.totalmem() - os.freemem()) / (1024 * 1024 * 1024)).toFixed(2)  //GB
}

console.log(currentOS);
//_______________________________//