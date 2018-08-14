const router = require("express").Router();
const appletController = require("../../controllers/appletController");

// Matches with "/api/articles"
router.route("/all")
  .get(appletController.findAllApplets)
  .post(appletController.createApplet);

// Matches with "/api/articles/:id"
router
  .route("/id/:id")
  .get(appletController.findAppletById)
  .put(appletController.updateApplet)
  .delete(appletController.removeApplet);

module.exports = router;
