
function checkNumber(number) {
    return new Promise((resolve, reject) => {
        if (number > 0) {
            resolve("Number is positive");
        } else {
            reject("Number must be positive");
        }
    });
}

async function displayResult() {
    try {
        const result = await checkNumber(5);
        console.log(result);
    } catch (error) {
        console.log("Error:", error);
    }
}

displayResult();
