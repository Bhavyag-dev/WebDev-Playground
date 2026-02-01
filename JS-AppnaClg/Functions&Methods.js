// //Function defintion
// function functionName (msg) { //an inout inside the function is called a parameter
//   //do some work
// }

// function myFunction(msg) {
//   //parameter -> input
//   console.log(msg);
// }

// myFunction("My Name Is Bhavya"); //Arguement
 

// function functionName(param1, param2) {
//   //Do Some work
// }

// //then you call the function
// functionName();

// function myfunction() {
//   console.log("My Nmane Is Bhavya Goyal");
//   console.log("Hello");
// }

// myfunction();


// //Function -> numbers, sum
// function sum(a, b) {
//   console.log(a + b);
// }

// sum(10, 12);

//function parameters are like local variables of function and they have block scope 

// //sum fucntion
// function Sum(a, ) { 
//   console.log(a + B);
// }



// //Multiplication Function 
// function mul(a, b) {
//   return a * b;
// }

// //Arrow function =>
// const sum = (a, b) => {
//   return a + b;
// }

// //Modern JS Arrow function
// const arrowMul = (a, b) => {
//   return(a * b);
// }


// //for each loop in array (method)
// let arr = ["Mumbai", "pune", "jaipur"];

// arr.forEach( (val) => {     //there are 3 parameters used in the for each array val, idx, arr
//   console.log(val.toUpperCase());
// });

//some more methods
//map method 

//filter method
// let arr = [1, 2, 3, 4, 5];
// let evenArr = arr.filter((val) => {
//   return val % 2 === 0;
// });
// console.log(evenArr);

// //reduce method 
//  let arr = [1, 2, 3, 4, 5];
//  const output = arr.reduce((res, curr) => {
//   return res + curr;
//  });

//  console.log(output);


//reduce method to find the greatest number
 let arr = [1, 2, 3, 4, 5];
 const output = arr.reduce((res, curr) => {
  return res > curr ? prev : curr;
 });

 console.log(output);

