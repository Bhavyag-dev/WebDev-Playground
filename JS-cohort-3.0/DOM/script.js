  function addTodo() {
    const inputElement = document.querySelector("input");
    const value = inputElement.value;
    console.log(value);  // right now logs value only
  }

  const title = document.querySelector("h1");
  console.log(title.innerHTML)

  const firstTodo = document.querySelector("h4");
  console.log(firstTodo.innerHTML)

  const secondTodo = document.querySelectorAll("h4")[1];
  console.log(secondTodo.innerHTML)

// let ctr = 0;
// function callback () {
//   console.log(ctr);
//   ctr = ctr + 1;
// }

// setInterval;(callback, 1000);