
Promise.resolve(10)
    .then((number) => {
        console.log("Number:", number);
        return number * 2;
    })
    .then((result) => {
        console.log("Result:", result);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
