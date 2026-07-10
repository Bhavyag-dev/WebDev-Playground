let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";

newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

document.body.prepend(newBtn);

let para = document.querySelector(".content");
para.innerText = "I am a changed paragraph";
