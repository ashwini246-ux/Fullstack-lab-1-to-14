
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "YOUR_ACTUAL_PASSWORD",
    database: "college"
});

const sql = "SELECT * FROM students";

connection.query(sql, (err, results) => {
    if (err) {
        console.log("Fetch failed:", err.message);
    } else {
        console.log("Student Records:");
        console.table(results);
    }

    connection.end();
});
