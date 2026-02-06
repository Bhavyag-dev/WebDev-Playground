// Strings → sequence of characters
let str = "Bhavya Goyal"
console.log(str[8])        // Access character at index 8
console.log(str.length)    // Total number of characters

// Template literals → strings with backticks, allow variables inside
let specialString = `This is a template literal`
console.log(typeof specialString) // "string"

// Using variables inside strings
let obj = { item: "pen", price: 10 }
console.log(`the price of the ${obj.item} is ${obj.price} rupees`)

// String methods (strings are immutable, original value doesn't change)
console.log("hello".slice(1, 3))   // Extracts characters from index 1 to 2
console.log("Bhavya".concat("Goyal")) // Joins two strings

let lang = "ILoveJS"
console.log(lang.replace("I", "B")) // Replaces first match, returns new string
