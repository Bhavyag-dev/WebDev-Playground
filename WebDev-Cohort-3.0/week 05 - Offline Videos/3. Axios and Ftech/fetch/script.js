function main() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => console.error(error));
}


main();


async function main() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())
  .then(json => console.log(json))
}
