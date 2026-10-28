
const express = require("express");
const app = express();

app.use(express.json());

let student = {
    name: "Ashwini",
    age: 20
};

app.put("/student", (req, res) => {
    student = req.body;
    res.json({
        message: "Student updated successfully",
        student: student
    });
});

app.get("/student", (req, res) => {
    res.json(student);
});

app.listen(3002, () => {
    console.log("Server running at http://localhost:3002");
});
