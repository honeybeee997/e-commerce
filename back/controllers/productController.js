const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/error");
const productModel = require("../models/productModel");

exports.getProduct = catchAsync(async (req, res, next) => {
  const { slug } = req.params;

  const product = await productModel.findOne({ slug });

  if (!product) {
    return next(
      new AppError("Could'nt find the product you're looking for", 404)
    );
  }

  res.status(200).json({ status: "success", data: { product } });
});

exports.getAllProdcuts = catchAsync(async (req, res, next) => {
  const products = await productModel.find();

  res.status(200).json({
    status: "success",
    results: products.length,
    data: {
      products,
    },
  });
});

exports.createProduct = catchAsync(async (req, res) => {
  const { name, price, description, sizes } = req.body;

  const newProduct = await productModel.create({
    name,
    price,
    description,
    sizes,
    creator: req.user._id,
  });

  res.json({
    status: "success",
    data: {
      product: newProduct,
    },
  });
});

exports.editProduct = catchAsync(async (req, res, next) => {
  const { slug } = req.params;
  const { name, price, description, sizes } = req.body;
  const product = await productModel.findOneAndUpdate(
    { slug },
    {
      name,
      price,
      description,
      sizes,
    }
  );

  if (!product) {
    return next(
      new AppError(
        "Could not find the product you're looking for. Please re-check the URL",
        404
      )
    );
  }

  product.name = name;
  product.price = price;
  product.description = description;
  product.sizes = sizes;

  const updatedProduct = await product.save();

  res.status(200).json({
    status: "success",
    data: {
      updatedProduct,
    },
  });
});

exports.deleteProduct = catchAsync(async (req, res, next) => {
  const { slug } = req.params;

  await productModel.findOneAndDelete({ slug });

  res.status(200).json({
    status: "success",
    message: "Product deleted successfully",
  });
});
