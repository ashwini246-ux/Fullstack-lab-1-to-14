
const fs = require("fs");

// Read data from input.txt
const reader = fs.createReadStream("input.txt", "utf8");

// Write data into output.txt
const writer = fs.createWriteStream("output.txt");

reader.on("data", (chunk) => {
    console.log("Reading:", chunk);
    writer.write(chunk);
});

reader.on("end", () => {
    writer.end();
    console.log("Reading completed!");
});

reader.on("error", (err) => {
    console.log("Error:", err.message);
});

writer.on("finish", () => {
    console.log("Writing completed!");
});
