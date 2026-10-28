
const express = require("express");
const app = express();

let student = {
    name: "Ashwini",
    age: 20
};

// Display student
app.get("/student", (req, res) => {
    res.json(student);
});

// Delete student
app.delete("/student", (req, res) => {
    student = null;
    res.send("Student deleted successfully");
});

app.listen(3003, () => {
    console.log("Server running at http://localhost:3003");
});
