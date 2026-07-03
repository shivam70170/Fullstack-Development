// ##Guessing numner game
const max = prompt("Enter the range in which you want to guess number");

const random = Math.floor(Math.random()*max)+1;
console.log(random);

let guess = prompt("Guess the number : ");

while(true){
    if(guess == "quit"){
        console.log("User quit");
        break;
    }
    else if (guess == random){
        console.log("Congrutes!");
        break;
    }
    else if(guess < random){
        guess = prompt("the number is small.Try again");
    }
    else {
        guess = prompt("the number is big . try again");
    }
}
