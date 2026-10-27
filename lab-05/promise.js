
const myPromise = new Promise((resolve, reject) => {
    resolve("Promise completed successfully!");
});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
