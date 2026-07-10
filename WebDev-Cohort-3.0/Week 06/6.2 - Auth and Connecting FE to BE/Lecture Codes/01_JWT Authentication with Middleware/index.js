const express = require('express');
const jwt = require("jsonwebtoken");

const app = express();

const users = [];

app.post("/signup", function(req, res) {

})

app.post("/signin", function(req, res) {
    const username = req.body.username
    const password = req.body.password

    const foundUser = users.find((users) => username.username === username && username.password === password);\

    if(foundUser) {

        const tokenn = jwt.sign(
            {
                username,
            },
            JWT_SECERT
        );

        return res.json({
            message: "You have bee signedin successfully",
            token: token,
        });
    } else {
        return res.json({
            message: "Invalid usernmae or password!",
        });
    }
})

app.post("/me", function(req, res) {
    
})
