// I'm using User generic type to set an example
// This user can be sorted in increasing order

const db = require("../models");
// const validate = require("../validate");

// require code to construct the svg file
const drawSVG = require("../utils/server_graphics/drawSVG");

//Mongoose query abstractions
module.exports = {
  findAllApplets: function(req, res) {
    db.Applet
      .find(req.query)
      .select('id mapName description')
      .sort({ date: -1 })
      .then(dbModel => {
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  findAppletById: function(req, res) {
    console.log('the request made it this far')
    db.Applet
      .findById(req.params.id)
      .then(dbModel => {
        var data = JSON.parse(dbModel.applet_data);
        var svg = drawSVG(data);
        // console.log(dbModel);
        res.json(svg);
      })
      .catch(err => res.status(422).json(err));
  },
  createApplet: function(req, res) {
      user = db.userQuery({user:"Philip", map:{max:"2",min:"23344",long:"345678909876543",lat:"56789087"},pic:"base64,"});
    db.Article
      .create(req.body)
      .then(dbModel => res.json(user))
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