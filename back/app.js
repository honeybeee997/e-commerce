const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "./.config.env" });

const adminRoutes = require("./routes/adminRoutes");
const productRoutes = require("./routes/productRoutes");
const blogRoutes = require("./routes/blogRoutes");
const collectionRoutes = require("./routes/collectionRoutes");

const errorHandler = require("./controllers/errorController");

// Creating App
const app = express();

// --- Converts all incoming data to req.body
app.use(express.json());

// --- CORS
const corsOptions = {
  origin: process.env.FRONT_END,
};

app.use(cors(corsOptions));

// --- Add request time to req.reqTime
app.use((req, _, next) => {
  req.reqTime = new Date().toISOString();
  next();
});

// --- Routes
app.use("/api/admin", adminRoutes);
app.use("/api/products", productRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/collections", collectionRoutes);

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
