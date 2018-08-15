var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("sandpileMap");
  var myobj = [
    { _id: 123456789, 
      user_id: 65432187, 
      name_of_map: 'St.Paul', 
      bounding_box: {
        min_long: -0.489,
        min_lat: 51.28,
        max_long: 0.236,
        max_lat: 51.686
      },
        created_at: Date.now,
        updated_at: Date.now,
       },
  ];
  dbo.collection("sandpileMap").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
// var schema = new Schema(
//   {
//     user_id: Schema.Types.ObjectId,
//     name_of_map: String,
//     bounding_box: {min_lat: Number, min_long: Numbr}
//     binary: Buffer,
//     living: Boolean,
//     updated: { type: Date, default: Date.now },
//     age: { type: Number, min: 18, max: 65, required: true },
//     mixed: Schema.Types.Mixed,
//     _someId: Schema.Types.ObjectId,
//     array: [],
//     ofString: [String], // You can also have an array of each of the other types too.
//     nested: { stuff: { type: String, lowercase: true, trim: true } }
//   })