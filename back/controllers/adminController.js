const mongoose = require("mongoose");
const catchAsync = require("../utils/catchAsync");
const adminModel = require("../models/adminModel");
const AppError = require("../utils/error");

const getAdmin = async (req, res, next) => {
  const { userId } = req.params;

  if (!mongoose.isValidObjectId(userId)) {
    return next(new AppError("Please enter a valid id", 400));
  }

  const admin = await adminModel.findById({ _id: userId });

  if (!admin) {
    return next(new AppError("No Admin found with this ID", 404));
  }

  return admin;
};

exports.getAllAdmins = catchAsync(async (req, res, next) => {
  const admins = await adminModel.find({ _id: { $ne: req.user._id } });

  res.status(200).json({
    status: "success",
    data: {
      admins,
    },
  });
});

exports.getAdmin = catchAsync(async (req, res, next) => {
  const admin = await getAdmin(req, res, next);

  if (!admin) return;

  res.status(200).json({
    status: "success",
    data: {
      admin,
    },
  });
});

exports.updateAdmin = catchAsync(async (req, res, next) => {
  const { userId } = req.params;
  const { name, email, role } = req.body;

  if (!mongoose.isValidObjectId(userId)) {
    return next(new AppError("Please enter a valid id", 400));
  }

  const update = {
    name,
    email,
    role,
  };

  const admin = await adminModel.findByIdAndUpdate({ _id: userId }, update, {
    new: true,
  });

  if (!admin) {
    return next(new AppError("No Admin found with this ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      admin,
    },
  });
});

exports.deleteAdmin = catchAsync(async (req, res, next) => {
  const { userId } = req.params;

  if (!mongoose.isValidObjectId(userId)) {
    return next(new AppError("Please enter a valid id", 400));
  }

  await adminModel.findByIdAndDelete({ _id: userId });

  res.status(200).json({
    status: "success",
    data: {
      message: "Admin deleted successfully",
    },
  });
});
