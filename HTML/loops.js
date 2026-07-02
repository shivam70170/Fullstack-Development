// ## loops initialisation , condition, update 

for(let i = 0;i < 5; i++){
    console.log(i);
}

for(let i = 5; i>=1; i--){
    console.log(i);
}

console.log("Print all odd number 1 to 15");

for(let i = 1; i<=15; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}

console.log("Print even numbers"); 

for(let i = 2; i <=10; i=i+2){
    console.log(i)
}

console.log("print multiplication of 5");

for(let i = 1; i<=10; i++){
    console.log(`5 X ${i} = ${5*i}`);
}

console.log("nested loops");

for(let i = 1; i < 3; i++){
    console.log(`outer loop ${i}`)
    for(let j = 1; j < 3; j++){
        console.log(j);
    }
}

console.log("While loop");

let i = 1;
while(i<=5){
    console.log(i);
    i++;
}

// console.log("Favorite Movie ")

// const favorite = "bahubali";

// let guess = prompt("Enter a movie which is my favorite movie : ");

// while((favorite != guess) && (guess != "quit")){
//     guess = prompt("Wrong guess.Retry again! : " );
// }
// if(guess == "quit"){
//     console.log("don,t worry its just fun");
// }
// if(guess == favorite){
//     console.log("congrulations you guess the right movie");
// }

console.log("break keyword use")

let a = 0;

while(a <= 6){
    if(a == 4){
        break;
    }
    console.log(a);
    a++;
}