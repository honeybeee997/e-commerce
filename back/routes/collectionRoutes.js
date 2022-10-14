const router = require("express").Router();
const { authenticateToken, permissions } = require("../utils/authentication");
const { validate } = require("../utils/validator");
const collectionController = require("../controllers/collectionController");
const admin = require("../models/adminModel");

router.get("/", collectionController.getAll);
router.get("/:id", collectionController.getOne);

router.delete("/:id", collectionController.delete);

// Checking the token and setting the permissions only to manager and admin
router.use(authenticateToken(admin), permissions("manager", "admin"));

router.post("/new", validate("collection"), collectionController.create);
router.patch(
  "/edit/:id",
  validate("collectionUpdate"),
  collectionController.updateOne
);

module.exports = router;
