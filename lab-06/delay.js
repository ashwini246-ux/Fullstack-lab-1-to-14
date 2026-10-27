
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data loaded after 2 seconds");
        }, 2000);
    });
}

async function displayData() {
    console.log("Loading...");
    const result = await getData();
    console.log(result);
}

displayData();
