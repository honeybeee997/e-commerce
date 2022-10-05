const router = require("express").Router();
const validate = require("../utils/validator");
const checkResults = require("../utils/validateResult");
const authenticateToken = require("../utils/authenticate");
const permissions = require("../utils/permissions");
const admin = require("../models/adminModel");
const productController = require("../controllers/productController");

router.get("/:slug", productController.getProduct);

router.use(authenticateToken(admin)); //---> Checking for a valid admin token

router.get("/", productController.getAllProdcuts);

router.post(
  "/new",
  validate("product"), //---> Validating Incoming Data
  checkResults, //---> Sending Response if incorrect data
  productController.createProduct
);

router.patch(
  "/edit/:slug",
  permissions("manager", "admin"), //---> Giving permission to just manager and admin
  validate("product"), //---> Validating Incoming Data
  checkResults, //---> Sending Response if incorrect data
  productController.editProduct
);

router.delete(
  "/d/:slug",
  permissions("admin"), //---> Giving permission to just manager and admin
  productController.deleteProduct
);

module.exports = router;
