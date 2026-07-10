function greet(name) {
  console.log("Hello", name);
}

greet("Bhavya");

// This function returns the sum of two numbers.
function sum(a, b) {
  return a + b;
}

console.log(sum(10, 12));

// Another function example with multiplication.
function mul(a, b) {
  return a * b;
}

console.log(mul(3, 4));

function countVowels(str) {
  let count = 0;

  // Convert to lowercase so we do not miss capital vowels.
  for (let ch of str.toLowerCase()) {
    if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Bhavya"));
