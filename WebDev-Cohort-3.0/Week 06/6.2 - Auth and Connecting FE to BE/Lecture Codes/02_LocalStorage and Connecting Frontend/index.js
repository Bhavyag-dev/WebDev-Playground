const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_Secert = "";

app.use(express.json());

const users = [];

function logger(req, res, next) {
  console.log(req.method + " request came");
  next();
}

app.get("/", function(req,res) {
  res.sendFile("./public/index.html");
})

app.post("/signup", logger, function(req,res) {

})

app.post("/signup", logger, function(req,res) {
  
})

function auth(req, res, next) {

}

app.get("/me", logger, auth, function(req,res) {

})

app.listen(3000);