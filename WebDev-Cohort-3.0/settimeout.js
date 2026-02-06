// function timeout() {
//   console.log("clock the button!");
// }
// console.log("hi");
// setTimeout(timeout, 1000); //beofre
// console.log("welcome to lopue");


function setTimeoutPromisified(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
function callback() {
  console.log("3 secs have passed");
}
setTimeoutPromisified(3000).then(callback); //new way of using setTimeout with promises

