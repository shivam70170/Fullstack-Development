// //## selecting Elements ----> getElementByClassName

// let smallImg = document.getElementsByClassName("oldImg");

// for(let i = 0; i<smallImg.length; i++){
//     smallImg[i].src = "assets-20260723T170100Z-1-001/assets/spiderman_img.png";
//     console.dir(`The value of img ${i} is changed`);
// };

// // ## getElementByTagName

// console.dir(document.getElementsByTagName("P"));
// document.getElementsByTagName("P")[1].innerHTML = "Shivam Sharma"


// //  ## Query Selector ## 

// console.dir(document.querySelector('h1'));

// console.dir(document.querySelector('.boxLink'));

// console.dir(document.querySelector('#description'));

// console.dir(document.querySelector("div a"));

// console.dir(document.querySelectorAll("div a"));

// // ##  using properties & Methods 


// let para = document.querySelector('p');

// console.dir(para);

// console.dir(para.innerText);

// console.dir(para.textContent);

// console.dir(para.innerHTML);

// // ## getter and setter 

// let img = document.querySelector('img');

// console.log(img.getAttribute('id'));

// console.log(img.setAttribute('id','vakue'));

// // ## Manipulating style ##

// let heading = document.querySelector('h1');

// heading.style.color = 'purple';

// heading.style.backgroundColor = "lightGreen";

// console.dir(heading.style);

// let links = document.querySelectorAll('.box a');

// // for(let i = 0; i <length.links; i++){
// //     links[i].style.color = "purple";
// // }

// for(link of links){
//     link.style.color = "purple";
// }


// // ## classLists ##

// console.dir(heading.classList);

// console.dir(img.classList);

// console.dir(para.classList);

// // ## add class to any objects


// heading.classList.add("green");

// console.dir(heading.classList);

// // ##remove class to any object


// heading.classList.remove("green");

// console.dir(heading.classList);

// // ## toggle add or remove with after refresh change it.

// console.dir(heading.classList.toggle("green"));//true

// console.dir(heading.classList.toggle("green"));//false

// console.dir(heading.classList.toggle("green"));//true

// // ## Navigation 

// // ## parentElement 

// let h4 = document.querySelector('h4');

// console.dir(h4.parentElement);

// ## children 

// let box = document.querySelector('.box');

// console.dir(box.children);

// // ## previousElementSibling / nextElementSibling

// img.previousElementSibling.computedStyleMap.color = "purple";

// console.dir(img.previousElementSibling);

// // ## Adding Elements on Page ##

// let newP = document.createElement('p');

// console.dir(newP);

// newP.innerText = "hello everyone ! i am new paragraph.";

// // ## appendChild  ##

// let body = document.querySelector('body');

// body.appendChild(newP);

// // ## append ##

// newP.append("this line insert with append "); 

// // ## prepend ## 

// let box = document.querySelector('.box');

let btn = document.createElement('button');

// btn.innerText = "click me";

// box.prepend(btn);

//  ## insertAdjacent(where, Element) ##

// beforebegin,afteregin,beforeend,afterend ##

btn.innerText = "NEW BUTTON";

let p = document.querySelector('p');

p.insertAdjacentElement("beforebegin",btn);

p.insertAdjacentElement("afterbegin",btn);

p.insertAdjacentElement("beforeend",btn);

p.insertAdjacentElement("afterend",btn);

// ## Removing elements

btn.remove();

