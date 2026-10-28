
const fs = require("fs");

console.log("1. Program started");

// Blocking operation
const data = fs.readFileSync("input.txt", "utf8");
console.log("2. Blocking read completed");
console.log(data);

// Non-blocking operation
fs.readFile("input.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Error:", err.message);
        return;
    }

    console.log("4. Non-blocking read completed");
    console.log(data);
});

console.log("3. Program continues");
