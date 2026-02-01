const fs = require('fs');
const path = require('path');

function main(fileName) {
  console.log(process.argv);
  fs.readFile(fileName, 'utf8', function (err, data) {
    if (err) {
      console.error(err.message);
      return;
    }

    let total = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i] === " ") total++;
    }

    console.log(total + 1);
  });
}

main(path.join(__dirname, "a.txt"));
