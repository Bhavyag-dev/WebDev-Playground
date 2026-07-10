let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");

modeBtn.addEventListener("click", function () {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
  }
});
