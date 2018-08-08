const express = require("express");
const router = express.Router();
const userRoute = require("./users");

// Article routes
router.use("/articles", userRoute);

module.exports = router;