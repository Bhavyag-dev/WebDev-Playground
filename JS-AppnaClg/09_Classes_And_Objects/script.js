// This object has a method that another object can reuse.
const employee = {
  calcTax: function () {
    console.log("tax rate is 10%");
  },
};

const karanArjun = {
  salary: 50000,
};

// This links karanArjun to employee so it can use calcTax().
karanArjun.__proto__ = employee;
karanArjun.calcTax();

// A class is like a blueprint for creating objects.
class Person {
  constructor(name) {
    this.name = name;
  }

  work() {
    console.log(this.name, "works");
  }
}

let bhavya = new Person("Bhavya");
bhavya.work();
