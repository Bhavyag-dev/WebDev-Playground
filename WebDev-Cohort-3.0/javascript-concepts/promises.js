function createSimplePromise() {
  return new Promise((resolve) => {
    resolve("Promise resolved successfully");
  });
}

createSimplePromise().then((message) => {
  console.log(message);
});

function setTimeoutPromisified(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

// Promises let us wait for asynchronous work without passing callbacks around manually.
setTimeoutPromisified(3000).then(() => {
  console.log("3 seconds have passed");
});
