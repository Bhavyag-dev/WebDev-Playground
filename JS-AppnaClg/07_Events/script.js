let btn1 = document.querySelector("#btn1");
let div = document.querySelector("div");

btn1.addEventListener("click", function () {
  console.log("button was clicked");
});

div.addEventListener("mouseover", function () {
  console.log("you are inside the div");
});
