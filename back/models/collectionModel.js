const mongoose = require("mongoose");
const collectionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, "Collection must have a name"],
    },
    creator: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Admin",
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

collectionSchema.virtual("products", {
  ref: "Product",
  localField: "_id",
  foreignField: "collection",
});

collectionSchema.pre(/^find/, function (next) {
  this.populate("products").select("-__v -updatedAt");
  next();
});

const model = mongoose.model("Collection", collectionSchema);
module.exports = model;
