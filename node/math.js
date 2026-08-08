// functions
function sum(a,b){
    return a + b;
}

// ARROW FUNCTIONS
let mul = (a,b) => {
    return a*b;
}

const g = 9.8;
const PI = 3.14;

let obj = {
    sum: sum,
    mul: mul,
    g: g,
    PI: PI
};

module.exports = obj;