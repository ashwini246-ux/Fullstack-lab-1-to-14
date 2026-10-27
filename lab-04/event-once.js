
const EventEmitter = require("events");

const event = new EventEmitter();

event.once("login", () => {
    console.log("Login event executed");
});

event.emit("login");
event.emit("login");
