const URL = "https://meowfacts.herokuapp.com/";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

// Fetch data from the API when the button is clicked.
function getFacts() {
  fetch(URL)
    .then(function (response) {
      // Convert the response into JavaScript data.
      return response.json();
    })
    .then(function (data) {
      // Show the first fact on the page.
      factPara.innerText = data.data[0];
    });
}

btn.addEventListener("click", getFacts);
