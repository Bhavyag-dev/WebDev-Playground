console.log("one");
console.log("two");

// This code waits 2 seconds before printing hello.
setTimeout(function () {
  console.log("hello");
}, 2000);

// These lines run before the setTimeout callback finishes waiting.
console.log("three");
console.log("four");
