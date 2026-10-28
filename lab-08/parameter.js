
const express = require("express");
const app = express();

app.get("/student/:name", (req, res) => {
    res.send("Student Name: " + req.params.name);
});

app.listen(3001, () => {
    console.log("Server running at http://localhost:3001");
});
