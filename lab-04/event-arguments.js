
const EventEmitter = require("events");

const event = new EventEmitter();

event.on("student", (name, age) => {
    console.log("Name:", name);
    console.log("Age:", age);
});

event.emit("student", "Ashwini", 20);
