/**
 * To see the output of this code, open the following HTML file in your browser.
 * The output will be logged in the console.
 */

// GET request using axios
// Function to fetch data using axios library - Promise version
function getData1() {
    axios.get("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => console.log(response.data))
        .catch((error) => console.error(error));
}

async function getData2() {
  
}