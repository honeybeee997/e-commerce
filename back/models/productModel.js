const mongoose = require("mongoose");
const slugify = require("slugify");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a product name"],
    },
    price: {
      type: Number,
      required: [true, "Please enter a prodcut price"],
    },
    description: {
      type: String,
      required: [true, "Please enter a product description"],
    },
    sizes: [
      {
        type: String,
        required: [true, "Please specify a product size"],
      },
    ],
    creator: {
      type: mongoose.SchemaTypes.ObjectId,
      required: [true, "Product must have a creator"],
      ref: "Admin",
    },
    stock: {
      type: Number,
      default: 100,
    },
    images: [String],
    onSalePrice: Number,
    slug: String,
    serialNo: Number,
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

productSchema.pre("save", function (next) {
  // If name is not changed. Don't create a new slug
  if (!this.isModified("name")) return next();

  const randomNumber = Math.round(Math.random() * 99999);
  const treatedName = this.name.trim().toLowerCase();
  this.slug = `${slugify(treatedName)}-${randomNumber}`;
  this.serialNo = randomNumber;

  next();
});

productSchema.pre(/^find/, function (next) {
  this.select("-__v -updatedAt").populate({
    path: "creator",
    select: "name",
  });
  next();
});

const model = mongoose.model("Product", productSchema);
module.exports = model;
