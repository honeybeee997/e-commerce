const { body, validationResult } = require("express-validator");
const AppError = require("./error");

const adminRoles = ["admin", "manager", "user"];

exports.validator = (method) => {
  switch (method) {
    case "admin": {
      return [
        body("name")
          .isLength({ min: 3 })
          .withMessage(
            "Please enter a valid admin name (at least 3 characters)"
          ),
        body("email")
          .isEmail()
          .withMessage("Please Provide a valid email")
          .toLowerCase()
          .trim(),
        body("role")
          .isIn(adminRoles)
          .withMessage(
            "Please specify a valid admin role (user, admin, manager)"
          ),
        body("password")
          .trim()
          .isLength({ min: 6 })
          .withMessage("Password must be at least 6 characters"),

        body("passwordConfirm")
          .trim()
          .exists()
          .withMessage("Password confirm must not be empty")
          .custom((val, { req }) => {
            if (val !== req.body.password) {
              throw new Error("Passowrd don't match");
            }
            return true;
          })
          .withMessage("Passwords don't match"),
      ];
    }
    case "adminUpdate": {
      return [
        body("name")
          .isLength({ min: 3 })
          .withMessage(
            "Please enter a valid admin name (at least 3 characters)"
          ),
        body("email")
          .isEmail()
          .withMessage("Please Provide a valid email")
          .toLowerCase()
          .trim(),
        body("role")
          .isIn(adminRoles)
          .withMessage(
            "Please specify a valid admin role (user, admin, manager)"
          ),
      ];
    }
    case "login": {
      return [
        body("email")
          .isEmail()
          .withMessage("Please Provide a valid email")
          .toLowerCase()
          .trim(),
        body("password")
          .isLength({ min: 6 })
          .withMessage("Password must be at least 6 characters"),
      ];
    }
    case "product": {
      return [
        body("name")
          .isLength({ min: 3 })
          .withMessage("Product name must be at least 3 characters"),
        body("price").exists().withMessage("Product must have a price"),
        body("description")
          .isLength({ min: 10 })
          .withMessage(
            "Product must have a description (at least 10 characters)"
          ),
        body("sizes").exists().withMessage(`Please specify a product size`),
      ];
    }
    case "blog": {
      return [
        body("title")
          .isLength({ min: 3 })
          .withMessage("Blog title must be at least 3 characters"),
        body("text")
          .isLength({ min: 10 })
          .withMessage("Blog content must be at least 10 characters"),
      ];
    }
  }
};

exports.checkResults = (req, _, next) => {
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

exports.validate = (method) => {
  return [this.validator(method), this.checkResults];
};
