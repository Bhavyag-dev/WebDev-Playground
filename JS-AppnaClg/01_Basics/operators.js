// ---------- Arithmetic Operators ----------
let a = 5
let b = 2

console.log(a + b) // addition
console.log(a - b) // subtraction
console.log(a * b) // multiplication
console.log(a / b) // division
console.log(a % b) // remainder
console.log(a ** b) // power (5²)


// ---------- Unary Operators ----------
a++               // increases value by 1
console.log(a)

a--               // decreases value by 1
console.log(a)


// ---------- Assignment Operators ----------
a += 4            // same as a = a + 4
console.log(a)

a -= 2            // same as a = a - 2
console.log(a)


// ---------- Comparison Operator ----------
console.log(a == b)  // checks value equality


// ---------- Logical Operators ----------
console.log(a > b && a > 0) // AND → true only if both are true
console.log(a < b || a > 0) // OR → true if any one is true
console.log(!(a < b))       // NOT → reverses result


// ---------- Ternary Operator ----------
let age = 18
let result = age >= 18 ? "can vote" : "cannot vote"
console.log(result)
