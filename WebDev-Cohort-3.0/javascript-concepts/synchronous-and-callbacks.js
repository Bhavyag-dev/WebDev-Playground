const fs = require("fs");

function sum(n) {
  let total = 0;

  for (let i = 1; i <= n; i += 1) {
    total += i;
  }

  return total;
}

console.log("Sum from 1 to 10:", sum(10));

console.log("1. Synchronous code starts");

setTimeout(() => {
  console.log("3. This runs later because setTimeout is asynchronous");
}, 1000);

console.log("2. Synchronous code finishes first");

function printFileContents(error, data) {
  if (error) {
    console.error("Error reading file:", error.message);
    return;
  }

  console.log("File contents:", data);
}

// readFile is callback-based, so Node continues running while the file is being read.
fs.readFile("a.txt", "utf-8", printFileContents);
