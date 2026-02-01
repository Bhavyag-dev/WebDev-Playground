// let button = document.getElementById("myId"); //h1
// console.dir(button);

// let headings = document.getElementsByClassName("myClass")
// console.dir(headings);

// // let paras = document.getElementsByTagName("p");
// // console.dir(paras); /orrr

// // let firstEl = document.querySelector("p");
// // console.dir(firstEl); //1st elment

// // let allEl = document.querySelectorAll("p");
// // console.dir(allEl); //all elemets

// let element = document.querySelector(".myClass"); //using class
// console.dir(element);

// let elements = document.querySelectorAll(".myClass");
// console.dir(elements);

// let  div = document.querySelector("div");
// console.dir(div);

//practice
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);




//DOM Manipulation
// // h2.innerText = h2.innerText + " From Bhavya Goyal ";
// let divs = document.querySelectorAll(".box");
// divs[0].innerText = "new value 1"
// divs[1].innerText = "new value 2"
// divs[2].innerText = "new value 3" 

// let para =  document.querySelector("p");
// console.log(para.getAttribute("class")); //to get the attribute value

// let para =  document.querySelector("p");
// console.log(para.setAttribute("class", "newClass")); //to set the attribute value

// //DOM Manipulation insert and delete elements
// let newBtn = document.createElement("button");
// newBtn.innerText = "sign up!"
// console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn);

let newBtn = document.createElement("Button");
newBtn.innerText = "Click Me!";

newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

document.querySelector("body").prepend(newBtn);

//Q2
let para = document.querySelector("p");
