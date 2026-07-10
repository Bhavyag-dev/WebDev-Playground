function getPromise() {
  return new Promise(function (resolve) {
    console.log("I am a promise");
    resolve("success");
  });
}

let promise = getPromise();

promise.then(function (result) {
  console.log(result);
});
