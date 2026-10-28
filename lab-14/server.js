
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/message", (req, res) => {
  res.json({
    message: "Hello from Node.js Express Backend!"
  });
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
