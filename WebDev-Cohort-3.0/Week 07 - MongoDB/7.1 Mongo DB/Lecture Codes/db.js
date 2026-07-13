// Import mongoose to interact with MongoDB
const mongoose = require("mongoose");

/*
const User = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
});
*/

// Use Schema and ObjectId from mongoose for creating models
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

// Define the User schema with fields for email, password, and name
const User = new Schema({
    email: { type: String, unique: true }, // Make email unique to avoid duplicate entries
    password: String,
    name: String,
});

// Define the Todo schema with fields for title, done, and userId
const Todo = new Schema({
    title: String,
    done: Boolean,
    userId: ObjectId,
});


const UserModel = mongoose.model("users", User);
const TodoModel = mongoose.model("todos", Todo);

module.exports = {
  UserModel,
  TodoModel,
};