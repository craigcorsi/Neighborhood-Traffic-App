const path = require("path");
const express = require("express");
const router = express.Router();
// const userRoute = require("./users");
const appletRoute = require("./applets");

// Article routes
router.use("/api/v1/", appletRoute);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;