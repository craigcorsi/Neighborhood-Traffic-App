const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserQuerySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  mapName: {
    type: String,
    required: true
  },
  boundingBox: {
    max: String,
    min:String,
    long:String,
    lat:String
  },
  avatar: {
    type: String
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  update_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = UserQuery = mongoose.model('Query', UserQuerySchema);