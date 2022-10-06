const express = require("express");

const adminRoutes = require("./routes/adminRoutes");
const productRoutes = require("./routes/productRoutes");
const blogRoutes = require("./routes/blogRoutes");

const errorHandler = require("./controllers/errorController");

// Creating App
const app = express();

// --- Converts all incoming data to req.body
app.use(express.json());

// --- Add request time to req.reqTime
app.use((req, _, next) => {
  req.reqTime = new Date().toISOString();
  next();
});

// --- Routes
app.use("/api/admin", adminRoutes);
app.use("/api/products", productRoutes);
app.use("/api/blogs", blogRoutes);

// --- Undefined Routes
app.use("*", (_, res) => {
  res.status(404).json({
    status: "fail",
    message: "Page Not Found",
  });
});

// --- Global Error Handler
app.use(errorHandler);

module.exports = app;
