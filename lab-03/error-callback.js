
function divide(a, b, callback) {
    if (b === 0) {
        callback("Cannot divide by zero", null);
    } else {
        callback(null, a / b);
    }
}

divide(10, 2, (error, result) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Result:", result);
    }
});
