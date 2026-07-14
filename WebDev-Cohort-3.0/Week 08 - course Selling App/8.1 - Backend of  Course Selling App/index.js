const express = require("express");
const mongoose = require("mongoose");

const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/courses");
const { adminRouter } = require("./routes/admin");

const app = express();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/user", adminRouter);
app.use("/api/v1/user", userRouter);

app.listen(3000, () => {
  console.log("server is running on port 3000")
});