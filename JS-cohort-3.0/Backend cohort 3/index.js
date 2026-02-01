// //prints the current directory for you 

// const path = require("path");
// console.log(__dirname);
// console.log(path.join(__dirname, "/index.js"));

console.log("start");
setTimeout(function(){
  console.log("zero sencond tumeout");
}),0;

setTimeout(function(){
  console.log("second timeout");
},2000);

console.log("end");