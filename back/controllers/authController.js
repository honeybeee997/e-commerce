const adminModel = require("../models/adminModel");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/error");
const catchAsync = require("../utils/catchAsync");

const sendToken = (id, admin, res) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE_ADMIN,
  });

  admin.password = undefined;

  res.status(202).json({
    status: "success",
    message: "Logged in successfully",
    data: {
      token,
      user: admin,
    },
  });
};

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
    message: "Admin created successfully",
    data: {
      user: newAdmin,
    },
  });
});

exports.loginAdmin = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const admin = await adminModel.findOne({ email }).select("+password");

  if (!admin || !(await admin.isPasswordCorrect(password, admin.password))) {
    return next(new AppError("Invalid email or password", 401));
  }

  sendToken(admin._id, admin, res);
});
