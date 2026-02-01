class promise2 {
  constructor(fn) {
    function afterDone() {
      this.resolve();
    }
    fn(afterDone)
  }
  then(callback) {
    this.resolve = callback;
  }
}

function readTheFile(resolve) {
  console.log("readTheFile called");
  setTimeout(function() {
    console.log("callback based setTimeout completed");
    resolve();
  }, 3000);
}

function setTimeoutPromisified() {
  return new promise2(readTheFile)
}

let p = setTimeoutPromisified();[]
function callback() {
  console.log("callback has been called")
}
p.then(callback);