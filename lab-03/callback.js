
function getData(callback) {
    setTimeout(() => {
        console.log("Data received");
        callback();
    }, 2000);
}

function displayMessage() {
    console.log("Callback executed");
}

console.log("Program started");
getData(displayMessage);
console.log("Program ended");
