
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send(`
        <h2>Student Form</h2>
        <form action="/student" method="POST">
            <input name="name" placeholder="Enter student name" required>
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post("/student", (req, res) => {
    res.send("Student Name: " + req.body.name);
});

app.listen(3001, () => {
    console.log("Server running at http://localhost:3001");
});
