/*
const product = { 
productName: "Ball pen", //string
rating: 4, //number
offer: 5,
rice: 270,
};

console.log(product.offer);
*/




// let num = prompt("enter a number:");
//  if (num % 5 === 0) {
//   console.log(num, "is multiple of 5");
//  } else {
//   console.log(num, "is NOT multiple of 5");555
//  }

// //q.2. Write a code which can give grades to students according to thier scores

// let score = prompt("enter a number:");
// let grade;
// if (score >= 90 && score <= 100) {
//   grade = "A";
// } else if (score >= 70 && score <= 89) {
//   grade = "B";
// } else if  (score >= 60 && score <= 69) {
//   grade = "C";
// }  else if  (score >= 50 && score <= 59) {
//   grade = "D";
// } else if  (score >= 0 && score <= 49) {
//   grade = "E";
// } 
// console.log("Accoding to your scores your grade is :", grade);76



// //loops
// //print all the numbers from 0 to 100
// for(let num=0; num<=100; num++) {
//   console.log("num2", num);
// }


// // //loops
// // //print all the numbers odd from 0 to 100
// for(let num=0; num<=100; num++) {
//   if(num % 2 !== 0) {
//      console.log("num =", num);
//   }
// }

// //loops
// //print all the numbers odd from 0 to 100
// for(let num = 0; num<=100; num++) {
//   if(num % 2 === 0) {
//     console.log("num =", num)
//   }
// }

/*
let gamenum = 25;
let userNum = prompt("Guess The Game Number: ");
while (userNum != gamenum) {
  userNum = prompt("You Entered The Wrong Number, Guess again: ");
}
console.log("Congrajulations. you entered the correct number");
*/



// let fullName = prompt("Enter Your Fullname Without Spaces");
// let res = "@" + fullName + fullName.length;
// console.log(res);

// //array practice qs
// // for a given array with marks of students 
// //find the avg marks of entire class

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
//  for (val of marks) {
//   sum += val;
// }

// let avg = sum / marks.length
// console.log(`Avg marks of the class = ${avg}`);






// //You are given an array with proce of 5 items  [250, 645, 300, 900, 50] 
// // representing the prices of different products.
// //  You want to apply a 10% discount on each item and update 
// // the array accordingly.
// let items = [250, 645, 300, 900, 50];
// for (let i = 0; i < items.length; i++) {
//   let discount = items[i] * 10 / 100;     // Get 10% of each item
//   items[i] = items[i] - discount;         // Subtract it from the original value
// }

// //console.log(`Items after discount = ${items}`);

// console.log("Items after discount:");
// //to print each item individually one below the other we use for of
// for (let price of items) {
//   console.log(price);
// } 


// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// console.log(companies.shift());

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// companies.splice(2, 1, "Ola");
// console.log(companies);

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// companies.push("Amazon");
// console.log(companies);

// //Create a function using the "function" keyword that takes a string as an arguemnt and returns the bumber of vowels in that string.
// function countVowels(str) {
//   let count = 0; // Initialize count variable
//   for (const char of str.toLowerCase()) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }


// //Create a function using the "function" keyword that takes a string as an arguemnt and returns the bumber of vowels in that string(Using Arrow Function).
// const countVow = (str) => {
//   let count = 0; 
//   for (const char of str) {
//     if (
//       char === "a" ||
//        char === "e" ||
//        char === "i" ||
//        char === "o" ||
//        char === "u"
//     ) {
//       count++;
//     }
//   }
  
//   return count;
// };


// //for a given array of numbers print the square of each value using the foreach loop
// let nums = [1, 2, 3, 4, 5];

// nums.forEach((num) => {
//   console.log(num ** 2);
// });

// or
// let nums = [1, 2, 3, 4, 5];
// let calcSquare = (num) => {
//   console.log(num ** 2);
// }

// nums.forEach(calcSquare);