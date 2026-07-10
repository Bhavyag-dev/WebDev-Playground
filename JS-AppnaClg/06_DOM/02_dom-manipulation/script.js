// Create a new button using JavaScript.
let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";

// Style the button from JavaScript.
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

// Add the button at the start of the body.
document.body.prepend(newBtn);

let para = document.querySelector(".content");

// Change the text already present on the page.
para.innerText = "I am a changed paragraph";
