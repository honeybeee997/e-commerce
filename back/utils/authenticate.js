const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const catchAsync = require("./catchAsync");
const AppError = require("./error");

module.exports = (model) => {
  return catchAsync(async (req, _, next) => {
    let token;

    const { authorization } = req.headers;

    if (!authorization || !authorization.split("Bearer ")[1]) {
      return next(
        new AppError("You are not logged in. Please login first", 401)
      );
    }

    token = authorization.split("Bearer ")[1];

    let decoded;
    try {
      decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    } catch (err) {
      return next(new AppError("Invalid Token. Please login again", 401));
    }

    const user = await model.findById(decoded.id);

    if (!user) {
      return next(
        new AppError(
          "User belonging to this token does not exist. Please login again",
          401
        )
      );
    }

    req.user = user;

    next();
  });
};
