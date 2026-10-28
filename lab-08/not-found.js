
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to Home Page");
});

// 404 handler (keep it after all routes)
app.use((req, res) => {
    res.status(404).send("404 - Page Not Found");
});

app.listen(3007, () => {
    console.log("Server running at http://localhost:3007");
});
