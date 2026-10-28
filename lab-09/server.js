
const express = require("express");
const app = express();

app.use(express.json());

let students = [
    { id: 1, name: "Ashwini", course: "BCA" },
    { id: 2, name: "Riya", course: "BCA" }
];

// GET: Display students
app.get("/students", (req, res) => {
    res.json(students);
});

// POST: Add student
app.post("/students", (req, res) => {
    const newStudent = {
        id: students.length
            ? Math.max(...students.map(s => s.id)) + 1
            : 1,
        name: req.body.name,
        course: req.body.course
    };

    students.push(newStudent);
    res.status(201).json(newStudent);
});

// PUT: Update student
app.put("/students/:id", (req, res) => {
    const student = students.find(
        s => s.id === Number(req.params.id)
    );

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    student.name = req.body.name;
    student.course = req.body.course;

    res.json({
        message: "Student updated successfully",
        student
    });
});

// DELETE: Remove student
app.delete("/students/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    students.splice(index, 1);

    res.json({
        message: "Student deleted successfully"
    });
});

app.listen(3010, () => {
    console.log("Server running at http://localhost:3010");
});
