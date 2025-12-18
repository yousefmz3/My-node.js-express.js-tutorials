//modules are encapsulated code blocks that can be reused in ...
// ... different parts of an application or in different applications altogether.

const names = require('./4-names.js');
const sayHi = require('./5-utils.js'); 
// console.log(names);
const sdata = require('./alternative-flavour.js');
require('./mind-grenade.js')
// console.log(sdata);
// const choice1 = 2;
// console.log(sdata.items[choice1]);
sayHi(names.yousef);
sayHi(names.Ahmed);
sayHi(names.Ali);
sayHi(names.Omar);  
