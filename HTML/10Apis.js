// ## call APIs

let url = "https://catfact.ninja/fact";

fetch(url)
.then((response) => {
    console.log(response);
    response.json().then((data) => {
        console.log(data);
    });
})
.catch((err) => {
    console.log("error",err);
});

//## first request using await \ async

async function getFacts() {
    try{
        let res1 = await fetch(url);
        let data1 = await res1.json();
        console.log("Data 1 :",data1);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log("Data 2 :",data2);
    }
    catch(err){
        console.log("Error : ",err);
    }
}

// ## request call using Axios 

let btn = document.querySelector("button");

btn.addEventListener("click",async () => {
    let fact = await getFact();
    console.log(fact);

    let p = document.querySelector("#fact");
    p.innerText = fact;
})


async function getFact() {
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }
    catch(err){
        console.log("Error : ",err);
        return "No fact."
    }
}

const url2 = "https://icanhazdadjoke.com/";

btn.addEventListener("click",async () => {
    let joke = await funnyJokes();
    console.log(joke);

    let p = document.querySelector("#jock");
    p.innerText = joke;
})

async function funnyJokes() {
    try{
        const config = {headers : {Accept : "application/Json"}};
        let res = await axios.get(url2, config);
        return res.data;
    }catch(err){
            console.log("error : ",err);
            return "No joke";
    }
}


let url3 = "http://universities.hipolabs.com/search?name=";

let btn2 = document.querySelector("#search");

btn2.addEventListener("click", async() => {
    let country = document.querySelector("input").value;
    console.log(country);
    let colleges = await getcolleges(country);
    show(colleges);
});

function show(colleges){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(let coll of colleges){
        console.log(coll.name);

        let li = document.createElement("li");
        li.innerText = coll.name;
        list.appendChild(li);
    }
}

async function getcolleges(country) {
    try{
        let res = await axios.get(url3 + country);
        return res.data;
    }catch(error){
        console.log("Error : ",error);
        return [];
    }
}