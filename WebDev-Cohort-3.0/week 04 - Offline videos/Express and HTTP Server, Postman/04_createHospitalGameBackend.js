/*
Your logic is like a doctor
Learn by doing, lets create an in memory hospital

You need to create 4 routes (4 things that the hospital can do)

GET - User can check how many kidneys they have and their health
POST - User can add a new kidney
PUT - User can replace a kidney, make it healthy
DELETE - User can remove a kidney

1. What should happen if they try to delete when there are no kidneys?
2. What should happen if they try to make a kidney healthy when all are already healthy?
*/

// import express module using require function and store it in express variable
const express = require("express");
const app = express();

const users = [{
  name: "bhavya",
  kidneys: [{
    healthy: false
  }]
}];

/**
 * Create a route handler for GET request
 * URL: http://localhost:3000/
 *
 *
 */
app.get("/", function(req, res){
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i<johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
      numberOfHealthyKidneys = numberOfHealthyKidneys + 1; 
    }
  }
  const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnHealthyKidneys
  })
})

app.listen(3000);