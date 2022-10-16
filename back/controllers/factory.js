const mongoose = require("mongoose");
const admin = require("../models/adminModel");
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
    return next(new AppError("Id is invalid. Please re-check", 400));
  }
  return true;
};

exports.getOne = (model, identifier) =>
  catchAsync(async (req, res, next) => {
    let filter;

    if (identifier === "blogs") filter = { slug: req.params.slug };

    if (identifier === "collections") {
      if (!checkMongooseId(req.params.id, next)) return;
      filter = { _id: req.params.id };
    }

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

    // Blogs Block
    if (identifier === "blogs") allowed = ["title", "text"];

    // Collections Block
    if (identifier === "collections") {
      if (!checkMongooseId(req.body.creator, next)) return;

      // Checking if the use exist
      const user = await admin.findById(req.body.creator);
      if (!user) {
        return next(
          new AppError(
            "User with this id does not exist. Please re-check the id",
            401
          )
        );
      }

      allowed = ["name", "creator"];
    }

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

    // Checking id validity
    if (!checkMongooseId(req.params.id, next)) return;

    // Settings relevant Data
    if (identifier === "blogs") {
      filter = { _id: req.params.id };
      allowed = ["title", "text"];
    } else if (identifier === "collections") {
      filter = { _id: req.params.id };
      allowed = ["name"];
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
    if (identifier === "blogs") {
      filter = { slug: req.params.slug };
    } else if (identifier === "collections") {
      if (!checkMongooseId(req.params.id, next)) return;
      filter = { _id: req.params.id };
    }
    await model.findOneAndDelete(filter);
    res.status(200).json({
      status: "success",
      message: "Item deleted successfully",
    });
  });
