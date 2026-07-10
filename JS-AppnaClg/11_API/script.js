const URL = "https://meowfacts.herokuapp.com/";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

function getFacts() {
  fetch(URL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      factPara.innerText = data.data[0];
    });
}

btn.addEventListener("click", getFacts);
