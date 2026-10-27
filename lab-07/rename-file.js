
const fs = require("fs");

fs.rename("sample.txt", "newfile.txt", (err) => {
    if (err) {
        console.log("Error renaming file");
        return;
    }

    console.log("File renamed successfully");
});
