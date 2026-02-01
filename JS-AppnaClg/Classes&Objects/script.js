// //Prototypes in JS
// const employee = {
//   calcTax() {
//     console.log("tax rate is 10%");
//   },
// };
// const karanArjun = {
//   salary: 50000,
// };
// karanArjun.__proto__ = employee;




// //Classes & Constructor in JS
// class ToyotaCar{
//   constructor(brand) {
//     console.log("creating a new object");
//     this.brand = brand;
//     this.mileage = this.mileage;
//   }
//   start() {
//     console.log("start");
//   }

//   stop() {
//     console.log("stop");
//   }
// }

// let fortuner = new ToyotaCar("fortuner", 10);
// console.log(fortuner);
// let lexus = new ToyotaCar("lexus", 12);
// console.log(lexus);




//Inheritance In JS
// class Parent {
//   hello() {
//     console.log("hello");
//   }
// }

// class Child extends Parent {}
// let obj =  new Child();


class person {
  constructor() {
    this.species = "homo sapiens";
  }

  eat() {
    console.log("eat");
  }

  sleep() {
    console.log("sleep");
  }

  work() {
    console.log("do nothing");
  }
}

class Engineer extends person {
  constructor(branch) {
    super();
    this.branch = branch;
  }
  work() {
    super.eat();
    console.log("solve problems")
  }
}

let bhavyaObj = new Engineer("mechanical engineer");