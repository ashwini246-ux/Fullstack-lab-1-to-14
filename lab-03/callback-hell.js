
setTimeout(() => {
    console.log("Step 1 completed");

    setTimeout(() => {
        console.log("Step 2 completed");

        setTimeout(() => {
            console.log("Step 3 completed");
        }, 1000);

    }, 1000);

}, 1000);
