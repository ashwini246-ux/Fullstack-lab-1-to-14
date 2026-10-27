
function task1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Task 1 completed"), 1000);
    });
}

function task2() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Task 2 completed"), 1000);
    });
}

async function runTasks() {
    console.log(await task1());
    console.log(await task2());
}

runTasks();
