const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email:{type: String, required:true},
  saved: { type: Boolean, default: false },
  date: { type: Date, required: true }
});

const User =  mongoose.model("User", userSchema);

module.exports = User;