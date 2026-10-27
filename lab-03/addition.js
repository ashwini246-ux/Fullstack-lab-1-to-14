
function calculate(a, b, callback) {
    callback(a + b);
}

function displayResult(result) {
    console.log("Addition:", result);
}

calculate(10, 20, displayResult);
