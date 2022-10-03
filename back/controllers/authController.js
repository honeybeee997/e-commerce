const adminModel = require("../models/adminModel");
const AppError = require("../utils/error");
const catchAsync = require("../utils/catchAsync");

exports.createAdmin = catchAsync(async (req, res, next) => {
  const { name, email, role, password, passwordConfirm } = req.body;
  const newAdmin = await adminModel.create({
    name,
    email,
    role,
    password,
    passwordConfirm,
  });
  res.status(201).json({
    status: "success",
    data: {
      user: newAdmin,
    },
  });
});

exports.loginAdmin = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const admin = await adminModel.find({ email });

  if (!admin || (await admin.correctPassword(password, admin.password))) {
    return next(new AppError("Invalid email or password", 401));
  }

  res.json("login socccess");
});
