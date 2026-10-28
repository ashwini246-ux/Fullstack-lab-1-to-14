
const express = require("express");
const app = express();

// Logging middleware
app.use((req, res, next) => {
    console.log("Method:", req.method);
    console.log("URL:", req.url);
    console.log("Time:", new Date().toLocaleTimeString());
    next();
});

app.get("/", (req, res) => {
    res.send("Welcome to Home Page");
});

app.get("/students", (req, res) => {
    res.json([
        { id: 1, name: "Ashwini" },
        { id: 2, name: "Riya" }
    ]);
});

app.listen(3012, () => {
    console.log("Server running at http://localhost:3012");
});
