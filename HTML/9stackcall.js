"use strict";
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

// nesting callback ===> callback hell;

changeColor("green",500,()=>{
    changeColor("blue",500,()=>{
        changeColor("aqua",500,()=>{
            changeColor("lightblue",500,()=>{
                changeColor("brown",500);
            });
        });
    });
});

function savetoDB(Data,success,failure){
    let number = Math.floor(Math.random() * 10) + 1;
    
    if(number > 4) {
        success();
    }else{
        failure();
    }
};

savetoDB("shivam",
    () => {
        console.log("Success : Data1 was stored.");
        savetoDB("Sharma",
            () => {
                console.log("success : Data2 was saved.");
                savetoDB("hello",
                    () => {
                        console.log("success : Data3 was saved.");
                    },
                    () => {
                        console.log("failure : Data3 was not saved.")
                    }
                );
            },
            () => {
                console.log("failure : Data2 was not saved.");
            }
        );
    },
    () => {
        console.log("failure : Data1 was not saved.");
    });

// Promises concept 

function savetoDB(Data){
    return new Promise ((resolve,reject) => {
        let number = Math.floor(Math.random() * 10) + 1;
        if(number > 4) {
            resolve("data was saved");
        }else {
            reject ("data was not saved");
        }
    });  
};

savetoDB("Shivam")
    .then(() => {
        console.log("Promise was resolved.");
    })
.catch(() => {
    console.log("Promise was failure.");
});

// ## Promise chaining 

savetoDB("Sharma")
.then(() => {
    console.log("Promise1 resolved.");
    return savetoDB("Hello")
    })
    .then(() => {
        console.log("Promise2 resolved.");
        return savetoDB("World")
    })  .then(() => {
            console.log("Promise3 resolved.");
})
.catch(() => {
    console.log("Promise1 rejected.");
});

// ## promise result 

savetoDB("Sharma")
.then((result) => {
    console.log("result : ",result);
    console.log("Promise1 resolved.");
    return savetoDB("Hello")
    })
    .then((result) => {
        console.log("result : ",result);
        console.log("Promise2 resolved.");
        return savetoDB("World")
    })  
    .then((result) => {
        console.log("result : ",result);
        console.log("Promise3 resolved.");
})
.catch((error) =>{
    console.log("error : ",error);
    console.log("Promise rejected.");
});

// ## now change color shift from callback hell to promise.

function changeColor(color,delay){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
        h1.style.color = color;
        resolve("color changed");
    }, delay);
    })
}

changeColor("red",1000)
.then(() => {
    console.log("red color complete");
    return changeColor("orange",1000)
})
.then(() => {
    console.log("orange color complete.");
    return changeColor("blue",1000)
})
.then(() => {
    console.log("blue color complete")
    return changeColor("aqua",1000)
})
.then(() => {
    console.log("aqua color complete")
    return changeColor("green",1000)
})
.then(() => {
    console.log("green color complete")
    return changeColor("lightgreen",1000)
})
.then(() => {
    console.log("lightgreen color complete")
})
.catch(() => {
    console.log("color not changed");
});

// ## async function handling error

async function greet() {
    throw "404 page not found";
    return "hello";
}
greet()
.then((result) => {
    console.log(result);
    console.log("page found");
})
.catch((err) => {
    console.log("error was found : ",err)
})

// ## Await keyword 

function getnum(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 1000);
    })
};

async function demo() {
    await getnum();
    await getnum();
    await getnum();
    getnum();
    getnum();
};

function changeColor(color,delay){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            // reject 
        
        let num = Math.floor(Math.random() * 10) + 1;
        if(num > 3){
            reject("Promise reject");
        }
        h1.style.color = color;
        console.log(color);
        resolve("color changed");
    }, delay);
    });
}

async function color() {
    try {
        await changeColor("red",1000);
        await changeColor("blue",1000);
        await changeColor("brown",1000);
        await changeColor("green",1000);
        await changeColor("orange",1000);
        await changeColor("lightgreen",1000);
    }catch(error){
        console.log("error : ",error)
    }
    
    let a = 5;
    console.log(a + 3);
};