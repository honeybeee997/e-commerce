const mongoose = require("mongoose");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/error");

const cleanBody = (allowedFields, req) => {
  for (const key in req.body) {
    if (!allowedFields.includes(key)) {
      delete req.body[key];
    }
  }

  return req.body;
};

const checkMongooseId = (id, next) => {
  if (!mongoose.isValidObjectId(id)) {
    return next(
      new AppError("Entered Id is invalid. Please re-check the URL", 400)
    );
  }
  return true;
};

exports.getOne = (model, identifier) =>
  catchAsync(async (req, res, next) => {
    let filter;
    if (identifier === "blogs") filter = { slug: req.params.slug };

    const item = await model.findOne(filter);

    if (!item) {
      return next(new AppError("Couldn't find what you're looking for", 404));
    }

    res.status(200).json({ status: "success", data: { result: item } });
  });

exports.getAll = (model) =>
  catchAsync(async (req, res, next) => {
    const items = await model.find();

    res.status(200).json({
      status: "success",
      results: items.length,
      data: {
        results: items,
      },
    });
  });

exports.createOne = (model, identifier) =>
  catchAsync(async (req, res, next) => {
    let allowed = [];

    if (identifier === "blogs") allowed = ["title", "text"];

    const body = cleanBody(allowed, req);

    const item = await model.create(body);
    res.status(201).json({
      status: "success",
      data: {
        result: item,
      },
    });
  });

exports.updateOne = (model, identifier) =>
  catchAsync(async (req, res, next) => {
    let filter,
      update,
      allowed = [];

    // Settings relevant Data
    if (identifier === "blogs") {
      allowed = ["title", "text"];
      if (!checkMongooseId(req.params.id, next)) return;
      filter = { _id: req.params.id };
    }

    // Dropping all unnecessary fields
    update = cleanBody(allowed, req);

    const item = await model.findOneAndUpdate(filter, update, { new: true });

    if (!item) {
      return next(
        new AppError("Could not update the item. Please re-check the URL", 404)
      );
    }

    res.status(200).json({
      status: "success",
      data: {
        result: item,
      },
    });
  });

exports.deleteOne = (model, identifier) =>
  catchAsync(async (req, res, next) => {
    let filter;
    if (identifier === "blogs") filter = { slug: req.params.slug };
    await model.findOneAndDelete(filter);
    res.status(200).json({
      status: "success",
      message: "Item deleted successfully",
    });
  });
