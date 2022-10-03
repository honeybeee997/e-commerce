const express = require("express");
const adminRoutes = require("./routes/adminRoutes");
const errorHandler = require("./controllers/errorController");
const app = express();

app.use(express.json());

app.use((req, _, next) => {
  req.reqTime = new Date().toISOString();
  next();
});

app.use("/api/admin", adminRoutes);

app.use(errorHandler);

module.exports = app;
