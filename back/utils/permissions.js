const AppError = require("./error");

module.exports = (...permitted) => {
  return (req, _, next) => {
    if (!permitted.includes(req.user.role)) {
      return next(new AppError("You are not allowed for this action", 401));
    }

    next();
  };
};
