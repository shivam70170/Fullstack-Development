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

// ## this in event listener  ##

let btn = document.querySelector('button');

btn.addEventListener("click",function(){
    console.dir(this.innerHTML);
});

// ## Keyboard Events ## 


btn.addEventListener("click",function(event){
    console.log(event);
    console.dir("button clicked");
});

let input = document.querySelector('input');

// ##KeyDown

input.addEventListener("keydown",function(){
    console.dir("the key is press");
});

// ## Keyup

input.addEventListener("keyup",function(){
    console.dir("the key is released");
});

input.addEventListener("keydown",function(event){
    console.log("Key  = ",event.key);
    console.log("Code = ",event.code)
    console.dir("the key is press");
});

// ## form event ##

let form = document.querySelector('form');

form.addEventListener("submit",function(event){
    event.preventDefault();
    alert("form submitted");
});

// ## Eporting form data


form.addEventListener("submit",function(event){
    event.preventDefault();
    
    let input = document.querySelector("input");
    let pass = document.querySelector("#password");

    console.log(input.value);
    console.log(pass.value);
});

// ## Event bubbling : child triger parent triger 

let div = document.querySelector("div");

let ul = document.querySelector("ul");

let lis = document.querySelectorAll("li");

div.addEventListener("click",function(){
    console.dir("div was clicked");
});

ul.addEventListener("click",function(event){
    event.stopPropagation();
    console.dir("ul was clicked");
})

for(li of lis){
    li.addEventListener("click",function(event){
        event.stopPropagation();
        console.dir("li was clicked");
})
}