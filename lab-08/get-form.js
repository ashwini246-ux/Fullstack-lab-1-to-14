
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(`
        <h2>Student Form</h2>
        <form action="/student" method="GET">
            <input type="text" name="name"
                   placeholder="Enter student name" required>
            <button type="submit">Submit</button>
        </form>
    `);
});

app.get("/student", (req, res) => {
    const name = req.query.name;
    res.send("Student Name: " + name);
});

app.listen(3009, () => {
    console.log("Server running at http://localhost:3009");
});
