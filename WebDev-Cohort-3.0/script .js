function readTheFile(finalValueHere) {
  
}


function readFile(fileName) {
  return new Promise(readTheFile);
}

const p = readFile("a.txt");

function callback(contents) {
  console.log(contents);
}
p.then(callback)