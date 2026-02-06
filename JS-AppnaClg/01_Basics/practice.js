// ---------- OBJECT ----------
const product = {
  productName: "Ball pen", // name of the product
  rating: 4,              // user rating
  offer: 5,               // discount %
  price: 270,             // price in rupees
}
console.log(product.offer) // get value using key


// ---------- CONDITIONALS ----------
let num = prompt("Enter a number")

// check if number is divisible by 5
if (num % 5 === 0) {
  console.log("Multiple of 5")
} else {
  console.log("Not a multiple of 5")
}


// ---------- GRADING SYSTEM ----------
let score = prompt("Enter your score")
let grade

// assign grade based on score range
if (score >= 90) grade = "A"
else if (score >= 70) grade = "B"
else if (score >= 60) grade = "C"
else if (score >= 50) grade = "D"
else grade = "E"

console.log("Your grade is:", grade)


// ---------- LOOPS ----------

// print numbers from 0 to 100
for (let i = 0; i <= 100; i++) {
  console.log(i)
}

// print odd numbers
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) console.log(i)
}

// print even numbers
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) console.log(i)
}


// ---------- GUESSING GAME ----------
let gameNum = 25
let userNum = prompt("Guess the number")

// keep asking until correct
while (userNum != gameNum) {
  userNum = prompt("Wrong guess, try again")
}
console.log("Correct guess!")


// ---------- STRING PRACTICE ----------
let fullName = prompt("Enter fullname without spaces")

// create username using name + length
console.log("@" + fullName + fullName.length)


// ---------- ARRAYS ----------

// calculate average marks
let marks = [85, 97, 44, 37, 76, 60]
let sum = 0

for (let m of marks) sum += m
console.log("Average =", sum / marks.length)


// apply 10% discount to each item
let items = [250, 645, 300, 900, 50]

for (let i = 0; i < items.length; i++) {
  items[i] -= items[i] * 0.1
}
console.log(items)


// ---------- ARRAY METHODS ----------
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]

companies.shift()                // remove first element
companies.splice(2, 1, "Ola")    // replace Uber with Ola
companies.push("Amazon")         // add at end
console.log(companies)


// ---------- FUNCTIONS ----------

// count vowels in a string
function countVowels(str) {
  let count = 0
  for (let ch of str.toLowerCase()) {
    if ("aeiou".includes(ch)) count++
  }
  return count
}

// same using arrow function
const countVow = (str) => countVowels(str)


// ---------- FOREACH ----------
let nums = [1, 2, 3, 4, 5]

// print square of each number
nums.forEach(num => console.log(num ** 2))
