
const os = require("os");
const path = require("path");

console.log("Operating System:", os.platform());
console.log("Computer Architecture:", os.arch());
console.log("File Name:", path.basename("C:/FullStack/lab-02/builtin.js"));
console.log("File Extension:", path.extname("builtin.js"));
