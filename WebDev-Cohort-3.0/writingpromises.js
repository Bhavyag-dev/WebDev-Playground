
function random() {

}

let p = new Promise(random);

function callback() {
  console.log("promise succeded");
}
p.then(callback); 