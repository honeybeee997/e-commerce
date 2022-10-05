const { body } = require("express-validator");

const adminRoles = ["admin", "manager", "user"];

module.exports = (method) => {
  switch (method) {
    case "admin": {
      return [
        body("name")
          .isLength({ min: 3 })
          .withMessage(
            "Please enter a valid admin name (at least 3 characters)"
          ),
        body("email").isEmail().withMessage("Please Provide a valid email"),
        body("role")
          .isIn(adminRoles)
          .withMessage(
            "Please specify a valid admin role (user, admin, manager)"
          ),
        body("password")
          .isLength({ min: 6 })
          .withMessage("Password must be at least 6 characters"),

        body("passwordConfirm")
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
        body("email").isEmail().withMessage("Please Provide a valid email"),
        body("role")
          .isIn(adminRoles)
          .withMessage(
            "Please specify a valid admin role (user, admin, manager)"
          ),
      ];
    }
    case "login": {
      return [
        body("email").isEmail().withMessage("Please Provide a valid email"),
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
  }
};
