//returns an object of the promise class
function setTimeoutPromisified(ms) {
  let p = new Promise(resolve => setTimeout(resolve, ms));
  return p;
} 