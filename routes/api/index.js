const express = require("express");
const router = express.Router();
const articleRoutes = require("./users");

// Article routes
router.use("/articles", articleRoutes);

module.exports = router;