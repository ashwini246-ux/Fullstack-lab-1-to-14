
const fs = require("fs");

fs.writeFile("sample.txt", "Hello from Node.js!", (err) => {
    if (err) {
        console.log("Error writing file");
        return;
    }

    console.log("File created successfully");
});
