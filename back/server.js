const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./.config.env" });
const port = process.env.PORT || 8080;

mongoose.connect(process.env.MONGO_URI, () => {
  console.log("db success");
  app.listen(port, () => {
    console.log(`App running on port ${port}...`);
  });
});
