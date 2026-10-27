
const EventEmitter = require("events");

const event = new EventEmitter();

function showMessage() {
    console.log("Message event executed");
}

event.on("message", showMessage);
event.emit("message");

event.off("message", showMessage);
event.emit("message");
