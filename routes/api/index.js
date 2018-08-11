const express = require("express");
const router = express.Router();
const userRoute = require("./users");

// Article routes
router.use("/mapView", userRoute);

module.exports = router;