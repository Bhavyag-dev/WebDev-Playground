async function fetchpost() {
  console.log("beforesending request");

  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  const data = await response.json();

  console.log(data);

  console.log("After receivning response")

  document.getElementById("posts").innerText = JSON.stringify(data);

}