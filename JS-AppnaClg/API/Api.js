const URL = "https://meowfacts.herokuapp.com/";
const factPara = document.querySelector('#fact');
const btn = document.querySelector('#btn');


// const getFacts = async () => {
//   console.log("getting data .......")
//   let response = await fetch(URL);
//   console.log(response); //JSON Response
//   let data = await response.json();
//   factPara.innerText= ([data.data[0]]);
// }

function getFacts () {
  fetch(URL).then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    factPara.innerText = ([data.data[0]]);
  });
}

btn.addEventListener("click", getFacts);