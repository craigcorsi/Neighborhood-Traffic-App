// I'm using User generic type to set an example
// This user can be sorted in increasing order

const db = require("../models");
// const validate = require("../validate");

//Mongoose query abstractions
module.exports = {
  findAllApplets: function(req, res) {
    db.Applet
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAppletById: function(req, res) {
    console.log('the request made it this far')
    db.Applet
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createApplet: function(req, res) {
    db.Applet
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateApplet: function(req, res) {
    db.Applet
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeApplet: function(req, res) {
    db.Applet
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};