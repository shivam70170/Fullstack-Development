
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