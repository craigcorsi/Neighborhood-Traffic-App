const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const db = require("./models");
const app = express();
const PORT = process.env.PORT || 3001;
const SEEDS = require('./models/seeds.js');

// Overpass API for retrieving map data
const overpass = require("query-overpass");
const overpassURL = "https://lz4.overpass-api.de/api/interpreter";

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);


mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/Neighborhood-Traffic-db",
);




// Start the API server
app.listen(PORT, function() {
  console.log(`API Server now listening on PORT ${PORT}...`);
});