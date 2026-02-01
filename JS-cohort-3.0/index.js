const fs = require("fs");


function print(err, data) {
  console.log(data);
}


const contents = fs.readFile("a.txt", "utf-8", print);

const contents2 = fs.readFile("a.txt", "utf-8", print);

