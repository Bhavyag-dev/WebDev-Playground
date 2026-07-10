// This function returns a Promise object.
function getPromise() {
  return new Promise(function (resolve) {
    console.log("I am a promise");
    resolve("success");
  });
}

let promise = getPromise();

// .then runs after the promise is resolved.
promise.then(function (result) {
  console.log(result);
});
