const mongoose = require('mongoose');
const SEEDS = require('./seeds');
const Schema = mongoose.Schema;

// Create Schema
const AppletSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Applet'
  },
  mapName: {
    type: String,
    required: true
  },
  boundingBox: {
    max_lat: String,
    max_long: String,
    min_lat: String,
    min_long: String
  },
  avatar: {
    type: String
  },
  applet_data: {
    type: String
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

const Applet = mongoose.model('Applet', AppletSchema);

module.exports = Applet;