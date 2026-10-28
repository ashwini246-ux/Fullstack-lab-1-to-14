
const express = require("express");
const app = express();

const studentRoutes = require("./studentRoutes");

app.use("/student", studentRoutes);

app.listen(3004, () => {
    console.log("Server running at http://localhost:3004");
});
