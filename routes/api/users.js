const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userControllers");

// Matches with "/api/articles"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;