const { validationResult } = require("express-validator");
const AppError = require("./error");

module.exports = (req, _, next) => {
  const errors = validationResult(req);
  const hasErrors = !errors.isEmpty();
  if (hasErrors) {
    const plainErrors = errors.array().map((err) => {
      return err.msg;
    });

    return next(new AppError(plainErrors[0], 401));
  }

  next();
};
