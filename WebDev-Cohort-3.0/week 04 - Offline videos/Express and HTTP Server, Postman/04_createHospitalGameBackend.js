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

// create an express application using express function
const app = express();

// Middleware to parse JSON data in the request body
app.use(express.json());


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

/**
 * Create a route handler for POST request
 * URL: http://localhost:3000/
 * 
 *  Request Body - Send JSON data in the request body to add a new kidney to the user 
    {
       "isHealthy": true
    }

 * Add a new kidney for the user with the health status provided in the request body
 */

app.post("/", function(req, res) {
  const isHealthy = req.body.isHealthy;
      // add a new kidney to the first user in the users array with the isHealthy value from the request body
  users[0].kidneys.push({
    healthy:isHealthy,
  });

  // send the response in JSON format with a message that the "kidney added successfully
  res.json({
    message: "Kidney added successfully",
  });
});

/**
 * Create a route handler for PUT request
 * URL: http://localhost:3000/
 *
 * Update all the unhealthy kidney to healthy kidney, if there are no unhealthy kidney then return a 411 status code
 */

app.put("./", function (req, res) {
  for (let i=0; i<users[0].kidneys.length; i++) {
    user[0].kidneys[i].healthy = true;
  }

  res.json({
    message: "Kidney replaced successfully",
  });
})

/**
 * Create a route handler for DELETE request
 * URL: http://localhost:3000/
 *
 * Remove all the unhealthy kidney, if there are no unhealthy kidney then return a 411 status code
 */

app.delete("./", function(req, res){
  
})

app.listen(3000);  