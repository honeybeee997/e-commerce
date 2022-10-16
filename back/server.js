const mongoose = require("mongoose");
const app = require("./app");

const port = process.env.PORT || 8080;

mongoose.connect(process.env.MONGO_URI, () => {
  console.log("db success");
  app.listen(port, () => {
    console.log(`App running on port ${port}...`);
  });
});
