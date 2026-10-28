
const express = require("express");
const app = express();

const students = [
    { id: 1, name: "Ashwini", course: "BCA" },
    { id: 2, name: "Riya", course: "BCA" }
];

app.get("/students/:id", (req, res) => {
    const id = Number(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            error: "Student not found"
        });
    }

    res.json(student);
});

// Handle invalid routes
app.use((req, res) => {
    res.status(404).json({
        error: "API route not found"
    });
});

app.listen(3013, () => {
    console.log("Server running at http://localhost:3013");
});
