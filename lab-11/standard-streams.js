
const readline = require("readline");

// Create interface for keyboard input and terminal output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your name: ", (name) => {
    process.stdout.write("Hello, " + name + "!\n");
    process.stderr.write("This is an example of the error stream.\n");

    rl.close();
});
