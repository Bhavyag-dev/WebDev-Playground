let student = {
  name: "Bhavya Goyal",
  age: 20,
  cgpa: 7.5,
  isPass: true,
};

// for-in is mainly used to loop through object keys.
for (let key in student) {
  console.log("key =", key, "value =", student[key]);
}
