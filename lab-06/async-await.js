
function getData() {
    return new Promise((resolve) => {
        resolve("Data received successfully");
    });
}

async function displayData() {
    const result = await getData();
    console.log(result);
}

displayData();
