"use strict";

let gameSeq = [];
let userSeq = [];

let colors = ["red","yellow","purple","blue"];

let started = false;
let level = 0;
let highest_score = 0;

let body = document.querySelector("body");
let h2 = document.querySelector("h2");

let high = document.createElement("h2");
high.innerText = `Highest Score : ${highest_score}`;
h2.insertAdjacentElement("afterend", high);

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started");
        started = true;

        levelup();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * colors.length);
    let randColor = colors[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    gameflash(randBtn);
}

function checkAns(idx){

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup, 1000);
        }
    }else{

        let score = level - 1;

        if (score > highest_score) {
            highest_score = score;
            high.innerText = `Highest Score : ${highest_score}`;
        }

        h2.innerHTML = `Game Over! your score : <b>${level-1} </b> <br> Press any key to start the game.`;
        body.style.backgroundColor = "red";
        setTimeout(() => {
            body.style.backgroundColor = "rgb(191, 173, 149)";
        }, 150);
        reset();
    }
}
function keyPress(){
    if (!started) return;
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id")
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".box");

for(let btn of allBtns){
    btn.addEventListener("click",keyPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}