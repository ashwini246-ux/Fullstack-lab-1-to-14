
const express = require("express");
const app = express();

// Normal route
app.get("/", (req, res) => {
    res.send("Welcome to Home Page");
});

// Error route
app.get("/error", (req, res, next) => {
    const error = new Error("Something went wrong!");
    next(error);
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).send("Internal Server Error: " + err.message);
});

app.listen(3006, () => {
    console.log("Server running at http://localhost:3006");
});
