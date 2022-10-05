const express = require("express");
const validate = require("../utils/validator");
const checkResults = require("../utils/validateResult");
const authenticateToken = require("../utils/authenticate");
const authController = require("../controllers/authController");
const adminController = require("../controllers/adminController");
const admins = require("../models/adminModel");
const permissions = require("../utils/permissions");

const router = express.Router();

router.post(
  "/login",
  validate("login"), //---> Validating Incoming Data
  checkResults, //---> Sending Response if incorrect data
  authController.loginAdmin
);

router.use(authenticateToken(admins)); //---> Checking for a valid admin token

router.get("/get-all-admins", adminController.getAllAdmins);

router.use(permissions("admin")); //---> Checking for a valid admin token

router.post(
  "/create-admin",
  validate("admin"), //---> Validating Incoming Data
  checkResults, //---> Sending Response if incorrect data
  authController.createAdmin
);

router.get("/:userId", adminController.getAdmin);

router.delete("/d/:userId", adminController.deleteAdmin);

router.patch(
  "/update/:userId",
  validate("adminUpdate"), //---> Validating Incoming Data
  checkResults, //---> Sending Response if incorrect data
  adminController.updateAdmin
);
module.exports = router;
