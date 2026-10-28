
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "YOUR_MYSQL_PASSWORD",
    database: "college"
});

connection.connect((err) => {
    if (err) {
        console.log("Connection failed:", err.message);
        return;
    }

    const sql = "INSERT INTO students (name, course) VALUES (?, ?)";
    const values = ["Riya", "BCA"];

    connection.query(sql, values, (err, result) => {
        if (err) {
            console.log("Insert failed:", err.message);
        } else {
            console.log("Student inserted successfully!");
            console.log("Student ID:", result.insertId);
        }

        connection.end();
    });
});
