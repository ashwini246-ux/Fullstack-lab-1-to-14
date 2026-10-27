
function getNumber(callback) {
    callback(5);
}

function square(number) {
    console.log("Square:", number * number);
}

function cube(number) {
    console.log("Cube:", number * number * number);
}

getNumber(square);
getNumber(cube);
