
const express = require("express");
const app = express();

app.get("/student", (req, res) => {
    res.json({
        name: "Ashwini",
        age: 20,
        course: "BCA"
    });
});

app.listen(3008, () => {
    console.log("Server running at http://localhost:3008");
});
