const express = require("express");
const authController = require("../controllers/authController");
const validate = require("../utils/validator");
const checkResults = require("../utils/validateResult");

const router = express.Router();

router.post(
  "/createAdmin",
  validate("admin"),
  checkResults,
  authController.createAdmin
);

router.post(
  "/login",
  validate("login"),
  checkResults,
  authController.loginAdmin
);

module.exports = router;
