
const fs = require("fs");

fs.appendFile("sample.txt", "\nWelcome to Full Stack Development!", (err) => {
    if (err) {
        console.log("Error appending file");
        return;
    }

    console.log("Data appended successfully");
});
