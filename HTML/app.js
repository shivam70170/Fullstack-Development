// ## switch method ##


let color = "yellow";

if (color === "red"){
    console.log("Please Stop");
}

else if(color === "yellow"){
    console.log("Ready ");
}

else {
    console.log("Go! ")
};



let name = "apple";

if (name[0] === "a" && name.length > 3){
    console.log("Good string");

}

let num = 14;

if( (num % 3 === 0) && ((num + 1 == 15) || (num - 1 == 11))){
    console.log(true)
}else{
    console.log(false)
}


let colors = "green";

switch(colors){
    case "red" :
        console.log("stop");
        break;
    case "yellow" : 
        console.log("slow down");
        break;
    case "green" : 
        console.log("GO");
        break;
    default : 
        console.log("Broken light");
}


let days = 6;

switch(days){
    case 1 :
        console.log("Monday");
        break;

    case 2 :
        console.log("Tuesday");
        break;
    
    case 3 :
        console.log("wednesday");
        break;

    case 4 :
        console.log("Thursday");
        break;

    case 5 :
        console.log("Friday");
        break;

    case 6 :
        console.log("Saturday");
        break;
    
    case 7 :
        console.log("Sunday");
        break;

    default :
        console.log("Enter a wrong number ")

}
//## Promt and alert learn 


// let fullname = prompt("Enter your fullname : ");
// let age = prompt("Enter your age : ");

// console.log(`${fullname} is ${age} years old.`)

let str = "apples";
if ((str[0] === 'a' || str[0] === 'A') && str.length > 5){
    console.log("Good string");
}else {
    console.log("Bad string")
};

let num2 = 211;
let num3 = 412;
let num4 = num2.length - 1;
let num5 = num3.length -1;
if (num2[num4] == num3[num5]){
    console.log("both number have same last digit");
}else{
    console.log("Both's number last digit differ.")
}

// ## toUpperCase() or toLowerCase() methods

let str1 = "Shivam Sharma"

console.log(str1.toUpperCase());

// ## indeOf metihod 

let ptr = str1.indexOf("v");
console.log(ptr);

//  ## slice method 

let str2 = "ShivamSharma";

console.log(str2.slice(7));

console.log(str2.slice(0,8));

console.log(str2.slice(-2));

// ## repeat method 

console.log(str2.replace("S","v"));

console.log(str2.repeat(2));

// ## Arrays are mutable

let students = ["Shivam", "Sharma", "Aman"];

students[0] = "Sharma";

// ## merge 2 array 

let arr1 = [1,2,3,4,6,5];

let arr2 = ['a','b','c','d'];

let mergearr = arr1.concat(arr2);

// ## reverse an array 

arr1.reverse();

// ## slicing 

console.log(arr2.slice(2));

console.log(arr2.slice(-1));

// ## splice 

console.log(arr2.splice(4));

console.log(arr2.splice(1,2,"f","g"));
console.log(arr2);

