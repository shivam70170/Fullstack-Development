
// ## this keyword 

const student = {
    name : "Shivam",
    age:19,
    eng:75,
    math:95,
    phy:80,
    getavg(){
        console.log(this);
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} got avg markes : ${avg}`);
    }
}
console.log(student.getavg());


// ## try and catch 

// console.log("hello");
// console.log("hello");
// console.log(a);
// console.log("hello");
// console.log("hello");

console.log("hello");
console.log("hello");
try{
    console.log(a);
}
catch(e){
    console.log("caught a error on a.");
    console.log(e);
}
console.log("hello");
console.log("hello");

// ## Arrow Functions 

const sum = (a,b) => {
    console.log(a + b);
}

// ## setTimeout functions 

console.log("Hi there !");

setTimeout( () =>{
    console.log("Shivam Sharma ");
},4000);

console.log("Welcome to ");

// ## set interval 

// setInterval(() => {
//     console.log("you learn about intervals");
// },3000);

console.log("setInterval");

// write an arrow function which returns n square .

const squ=  (n) => (n*n)

const id1 = setInterval(() =>{
        console.log("Hello!");
},2000);

setTimeout(() => {
    clearInterval(id1)
}, 10000);

// ## ForEach functions 

let arr = [{
    name : "Shivam",
    age : 19
},
{
    marks : 94.4,
    eng : 79
},
{
   math : 84,
   phy : 96 
}]

arr.forEach((student) => {
    console.log(student.marks);
});

// ## Map 

let arr1 = [1,2,3,4];

let double = arr1.map(arr2 => {
    return arr2 * 2;
});

console.log(double);


// ## fiter 

let nums = [1,4,6,8,7,9,4,2,0];

let nums1 = nums.filter((num) => {
    return num % 2 == 0;
})

console.log(nums1);

// ## Every  

let num2 = [2,4,6,8,1];

let num3 = num2.every((el) => {
    return el % 2 == 0;
});

console.log(num3);

//## some 

let num4 = [2,4,6,8,10,1,3,7,9,3];

let num5 = num4.some((el) => {
    return el % 2 == 0;
});

console.log(num5);

// ## Reduce 

let num6 = [2,4,6,8,10,7,9,3];

let num7 = num6.reduce((res,el) => (res + el));

console.log(num7);

// ## Maximun number in an array using reduce function

let arr3 = [3,4,5,6,9,90];

let max = arr3.reduce((max, el) => {
    if(max < el){
        return el;
    }else{
        return ;
    }

    console.log(max);
});

//## Default Parameters 

function sum1 (a,b = 2){
    return a + b;
}

console.log(sum1(9));

// ## Spread 

let arr6 = [1,2,3,40,1,2,0,8472,47,28,0,1,];

console.log(Math.min(...arr6));  //... => means spread into iterables parts.

// ## Spread with literals 

let arr7 = [...arr6];

console.log(arr7);

let str = "Shivam Sharma";

let name = [...str];

console.log(name);

const data = {
    email : "shivam@gmail.com",
    password : 57
}

console.log(data);

const dataCpoy = {...data, id : 123};

console.log(dataCpoy);

// ## Rest ==> opposite to spread

function sume (...args){
      for (let i = 0; i<args.length;i++){
        console.log(`You gave us : ${args[i]}`)
      }
}

// ## Destructuring


let names = ["tony","bruce","stand","dhumsdae","xyz"];

let [winnner,runnerup,...others] = names;

console.log(winnner,runnerup);

// ## Destructuring with Objects

const students = {
    name : "Karan",
    class : 9,
    age : 14,
    subjects : ["hindi","english","math","science","social science"],
    username : "karan123",
    password : 1234
};

const{username : user, password : pass} = students;

console.log(user);