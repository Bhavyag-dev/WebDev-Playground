const express = require("express");
const mongoose = require("mongoose");

const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");

const app = express();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin ", adminRouter);
app.use("/api/v1/course", courseRouter);

async function main() {
  try{
  const connection = await mongoose.connect("mongodb+srv://admin_gbhavyawork:%40Bha179vya@cluster0.j2xw4ka.mongodb.net/todo-app-database");
  console.log("Conneted to database");
  } catch  (error) {
    m 
  }
} 




app.listen(3000, () => {
  console.log("server is running on port 3000")
});