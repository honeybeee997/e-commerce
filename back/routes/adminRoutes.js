const express = require("express");
const { validate } = require("../utils/validator");
const { authenticateToken, permissions } = require("../utils/authentication");
const authController = require("../controllers/authController");
const adminController = require("../controllers/adminController");
const admins = require("../models/adminModel");

const router = express.Router();

router.post(
  "/login",
  validate("login"), //---> Validating Incoming Data
  authController.loginAdmin
);

router.use(authenticateToken(admins)); //---> Checking for a valid admin token

router.get("/get-all-admins", adminController.getAllAdmins);

router.use(permissions("admin")); //---> Checking for a valid admin token

router.post(
  "/create-admin",
  validate("admin"), //---> Validating Incoming Data
  authController.createAdmin
);

router.get("/:userId", adminController.getAdmin);

router.delete("/d/:userId", adminController.deleteAdmin);

router.patch(
  "/update/:userId",
  validate("adminUpdate"), //---> Validating Incoming Data
  adminController.updateAdmin
);
module.exports = router;
