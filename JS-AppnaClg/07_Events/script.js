let btn1 = document.querySelector("#btn1");
let div = document.querySelector("div");

// addEventListener waits for the click, then runs the function.
btn1.addEventListener("click", function () {
  console.log("button was clicked");
});

// This runs when the mouse comes over the div.
div.addEventListener("mouseover", function () {
  console.log("you are inside the div");
});
