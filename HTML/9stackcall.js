// ## Stack calling ## Stack farmwork

function one(){
    console.log("one")
    return 2;
}

function two(){
    console.log("two");
    return one() + one();
}

function three(){
    let ans = two() + one();
    console.log(ans);
}

three();

// ## js in single threaded ##

setTimeout(() => {
    console.log("shivam sharma");
}, 1000);

console.log("hello...");

let id1 = setInterval(() => {
    console.log("so this is browser work");
}, 1000);

setTimeout(() => {
    clearInterval(id1);
}, 6000);

// ## Callback Hell

let h1 = document.querySelector("h1");

setTimeout(() => {
    h1.style.color = "red";
}, 1000);

setTimeout(() => {
    h1.style.color = "orange";
}, 2000);

function changeColor(color,delay,nextchangecolor){
    setTimeout(() => {
        h1.style.color = color;
        if(nextchangecolor) nextchangecolor();
    }, delay);
}
