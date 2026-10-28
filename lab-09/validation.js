
const express = require("express");
const app = express();

app.use(express.json());

app.post("/students", (req, res) => {
    const { name, course } = req.body;

    // Check required fields
    if (!name || !course) {
        return res.status(400).json({
            message: "Name and course are required"
        });
    }

    // Check data types and empty spaces
    if (
        typeof name !== "string" ||
        typeof course !== "string" ||
        !name.trim() ||
        !course.trim()
    ) {
        return res.status(400).json({
            message: "Please enter valid name and course"
        });
    }

    res.status(201).json({
        message: "Student data is valid",
        student: {
            name: name.trim(),
            course: course.trim()
        }
    });
});

app.listen(3011, () => {
    console.log("Server running at http://localhost:3011");
});
