//## selecting Elements ----> getElementByClassName

let smallImg = document.getElementsByClassName("oldImg");

for(let i = 0; i<smallImg.length; i++){
    smallImg[i].src = "assets-20260723T170100Z-1-001/assets/spiderman_img.png";
    console.dir(`The value of img ${i} is changed`);
};

// ## getElementByTagName

console.dir(document.getElementsByTagName("P"));
document.getElementsByTagName("P")[1].innerHTML = "Shivam Sharma"


//  ## Query Selector ## 

console.dir(document.querySelector('h1'));

console.dir(document.querySelector('.boxLink'));

console.dir(document.querySelector('#description'));

console.dir(document.querySelector("div a"));

console.dir(document.querySelectorAll("div a"));

// ##  using properties & Methods 


let para = document.querySelector('p');

console.dir(para);

console.dir(para.innerText);

console.dir(para.textContent);

console.dir(para.innerHTML);

// ## getter and setter 

let img = document.querySelector('img');

console.log(img.getAttribute('id'));

console.log(img.setAttribute('id','vakue'));

