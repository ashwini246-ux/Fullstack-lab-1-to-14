
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to Request Headers Practical!");
});

app.get("/headers", (req, res) => {
    console.log("User-Agent:", req.get("User-Agent"));
    console.log("Host:", req.get("Host"));

    res.json({
        message: "Request Headers",
        userAgent: req.get("User-Agent"),
        host: req.get("Host")
    });
});

app.listen(3011, () => {
    console.log("Server running at http://localhost:3011");
});
