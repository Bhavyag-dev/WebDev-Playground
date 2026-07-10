const employee = {
  calcTax: function () {
    console.log("tax rate is 10%");
  },
};

const karanArjun = {
  salary: 50000,
};

karanArjun.__proto__ = employee;
karanArjun.calcTax();

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
