let btn = document.querySelector('button');

console.dir(btn);

btn.onclick = function(){
    console.dir("button was clicked");
}

function sayhello(){
    console.dir("clicked done");
}

function nameste(){
    console.dir("hello!");
}

btn.onclick = sayhello;

// ## addEventListener ## 

let btns = document.querySelectorAll('button');

for(btn of btns){
    btn.onclick = sayhello;
    btn.onmouseenter = function(){
        console.log("you enter a button");
    }
};

for(let btn of btns){
    btn.addEventListener("click",nameste);
    btn.addEventListener("click",sayhello);
};
