const product = {
  productName: "Ball pen",
  rating: 4,
  offer: 5,
  price: 270,
};

console.log(product.productName);

let num = 10;

if (num % 2 === 0) {
  console.log(num, "is even");
} else {
  console.log(num, "is odd");
}

let score = 76;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 70) {
  grade = "B";
} else if (score >= 60) {
  grade = "C";
} else if (score >= 50) {
  grade = "D";
} else {
  grade = "E";
}

console.log("Your grade is:", grade);
