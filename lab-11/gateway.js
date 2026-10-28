
const express = require("express");

const app = express();

// Internal service
app.get("/service", (req, res) => {
    res.json({
        message: "Hello from Internal Service"
    });
});

// Simple gateway route
app.get("/gateway", async (req, res) => {
    try {
        const response = await fetch("http://localhost:3012/service");
        const data = await response.json();

        res.json({
            gateway: "Request forwarded successfully",
            serviceResponse: data
        });
    } catch (error) {
        res.status(500).json({
            error: "Gateway could not connect to service"
        });
    }
});

app.listen(3012, () => {
    console.log("Gateway server running at http://localhost:3012");
});
