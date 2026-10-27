
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received successfully");
        }, 2000);
    });
}

getData().then((result) => {
    console.log(result);
});
