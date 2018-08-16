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
  description: {
    type: String
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

Applet.remove({}).catch(function(err){
  console.log(err);
});


// seed database
for (let i = 0; i < SEEDS.length; i++) {
  Applet.create(SEEDS[i]).then(function(new_applet){
    console.log(`database entry ${i} has been made!`);
  }).catch(function(err){
    console.log(`an error has occurred`);
    if (i == SEEDS.length - 1) {
      console.log(err);
    }
  });
}

module.exports = Applet;