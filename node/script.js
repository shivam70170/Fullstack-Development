// ## start learning node js

// let n = 5;

// for(let i = 0; i < n; i++){
//     console.log("hello" , i);
// }

// console.log("again hello");

// let args = process.argv;
// for(let i = 2; i < args.length; i++){
//     console.log(" hello to ", args[i]);
// }

// // ## module expotrs mean one file to another file

// const math = require("./math");

// console.log(math.sum(3,5));
// console.log(math.PI);

import {sum , PI} from "./math.js";

console.log(sum(1,6));
console.log(PI);