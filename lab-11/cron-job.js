
const cron = require("node-cron");

// Run this task every minute
cron.schedule("* * * * *", () => {
    console.log("Cron Job executed at:", new Date().toLocaleTimeString());
});

console.log("Cron Job started. Waiting for scheduled task...");
