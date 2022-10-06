const mongoose = require("mongoose");
const { default: slugify } = require("slugify");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter a blog title"],
      trim: true,
      unique: true,
    },
    text: {
      type: String,
      required: [true, "Please enter a blog Text"],
      trim: true,
    },
    image: {
      type: String,
      default: "public/images/blogs/blog-cover.jpg",
    },
    slug: String,
    author: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Admin",
    },
  },
  { timestamps: true }
);

blogSchema.pre("save", function (next) {
  this.slug = slugify(this.title.toLowerCase());
  next();
});

blogSchema.pre(/^find/, function (next) {
  this.select("-updatedAt -__v");
  next();
});

const blogModel = mongoose.model("Blog", blogSchema);

module.exports = blogModel;
