
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

// // ## set interval 

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