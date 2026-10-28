
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "YOUR_ACTUAL_PASSWORD",
    database: "college"
});

const sql = "UPDATE students SET course = ? WHERE name = ?";
const values = ["BCA Final Year", "Riya"];

connection.query(sql, values, (err, result) => {
    if (err) {
        console.log("Update failed:", err.message);
    } else if (result.affectedRows === 0) {
        console.log("Student not found!");
    } else {
        console.log("Student record updated successfully!");
    }

    connection.end();
});
