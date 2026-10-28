
const express = require("express");
const app = express();

// Middleware
app.use((req, res, next) => {
    console.log("Middleware executed");
    next();
});

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to Home Page");
});

// About route
app.get("/about", (req, res) => {
    res.send("Welcome to About Page");
});

app.listen(3005, () => {
    console.log("Server running at http://localhost:3005");
});
