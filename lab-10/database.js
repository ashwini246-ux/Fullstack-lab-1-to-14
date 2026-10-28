const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "YAHAN_APNA_ACTUAL_PASSWORD",
    database: "college"
});

connection.connect((err) => {
    if (err) {
        console.log("Connection failed:", err.message);
        return;
    }

    console.log("MySQL connected successfully!");

    connection.query("SELECT * FROM students", (err, results) => {
        if (err) {
            console.log("Query error:", err.message);
        } else {
            console.log(results);
        }
        connection.end();
    });
});