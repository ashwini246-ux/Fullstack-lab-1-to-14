
const EventEmitter = require("events");

const event = new EventEmitter();

event.on("message", () => {
    console.log("First listener executed");
});

event.on("message", () => {
    console.log("Second listener executed");
});

event.emit("message");
