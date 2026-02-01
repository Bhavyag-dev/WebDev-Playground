let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");

// Set default mode to light
body.classList.add("light");

modeBtn.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
    console.log("dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    console.log("light");
  }
});
