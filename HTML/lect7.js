// ## function creation and calling

function hello() {
    console.log("Hii");
}

hello();

function print1to5() {
    for(let i=1; i<=5; i++){
        console.log(i);
    }
}

print1to5();

function dice1(){
    let dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);
}
dice1();

// ## functions with arguments 
function name(name){
    console.log(name);
}

name("Shivam");

function nameInfo(name,age){
    console.log(`${name} is now ${age} year old.`);
}

nameInfo("shivam",19);

// ## average of 3 numbers

function avg3number(a,b,c){
    console.log((a + b + c) / 3);
}

avg3number(1,2,3);

avg3number(15,78,921);


// ## table function

function table(num){
    for(let i = 1; i<=10; i++){
        console.log(`${num} X ${i} = ${num * i}`);
    }
}

table(15);

// ## return keyword 

function sum(a,b){
    return a + b;
}

console.log(sum(3,7));

function isAdult(age){
    if(age >= 18){
        return "Adult";
    } 
    else{
        return "Not Adult";
    }
}

let nue = 10 // Global Scope 
function sum1ton(n){
    let nue = 0; //local scope/ function scope
    for(let i=1; i<=n; i++){
        nue = nue + i;
    }
    return nue;
}

console.log(sum1ton(5));

// ## function Expressions

let nun = function(nen) {
    let tum = 0;
    for(let i=1; i<=nen; i++){
        tum+=i;
    }
    return tum;
}
console.log(nun(5));

let helle = function(){
    console.log("namesty");
}

console.log(helle());

console.log(helle);

// ## Higher Order Functions

function multigreet(func, n ) {
    for(let i = 1; i<=n; i++){
        func();
    }
}

let greet = function(){
    console.log("hello");
}

multigreet(greet,3);

function oddoreventest(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }else if(request == "even"){
        return function(n){
            console.log(n%2==0);
        }
    }else{
        console.log("Wrong request")
    }
}
let request = "even";

let func = oddoreventest(request);

console.log(func);

// ##Methods 

const calculator = {
    add : function(a,b){
        return a + b;
    },
    sub : function(a,b){
        return a - b;
    },
    mul : function(a,b){
        return a * b;
    }
};

calculator.div = function(a,b){
    return a / b;
};