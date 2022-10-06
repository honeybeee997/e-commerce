const router = require("express").Router();

const { validate } = require("../utils/validator");
const { authenticateToken, permissions } = require("../utils/authentication");
const blogsController = require("../controllers/blogsController");
const admin = require("../models/adminModel");

router.get("/:slug", blogsController.getOne);

router
  .route("/")
  .get(blogsController.getAll)
  .post(
    authenticateToken(admin),
    permissions("manager", "admin"),
    validate("blog"),
    blogsController.create
  );

router.use(authenticateToken(admin));

router.patch(
  "/edit/:id",
  permissions("manager", "admin"),
  validate("blog"),
  blogsController.update
);
router.delete("/:slug", permissions("admin"), blogsController.delete);

module.exports = router;
