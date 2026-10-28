
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "YOUR_ACTUAL_PASSWORD",
    database: "college"
});

const sql = "DELETE FROM students WHERE name = ?";
const values = ["Riya"];

connection.query(sql, values, (err, result) => {
    if (err) {
        console.log("Delete failed:", err.message);
    } else if (result.affectedRows === 0) {
        console.log("Student not found!");
    } else {
        console.log("Student record deleted successfully!");
    }

    connection.end();
});
