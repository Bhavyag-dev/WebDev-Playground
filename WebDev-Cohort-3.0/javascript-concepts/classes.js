class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  area() {
    return this.width * this.height;
  }

  paint() {
    console.log(`Painting with color ${this.color}`);
  }
}

const rectangle = new Rectangle(2, 4, "red");
console.log("Rectangle area:", rectangle.area());
rectangle.paint();

// Built-in classes like Date can also create useful objects for us.
const currentDate = new Date();
console.log("Current month:", currentDate.getMonth());

// Map stores key-value pairs and is useful when keys are not limited to plain objects.
const userDetails = new Map();
userDetails.set("name", "Alice");
userDetails.set("age", 30);

console.log("User name:", userDetails.get("name"));
