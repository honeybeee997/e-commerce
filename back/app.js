const express = require("express");

const app = express();

app.use(express.json());

app.use((req, _, next) => {
  req.reqTime = new Date().toISOString();
  next();
});

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Express app successful",
    time: req.reqTime,
  });
});

module.exports = app;
