var express = require('express');
var mongo = require('mongodb');

var app = express();
app.use(express.json());

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

app.put('/api/Date', (req, res) => {
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("CarRental");
  var myquery = { Booking_id: 201 };
  var newvalues = { $set: {Advance : 2200} };
  dbo.collection("Car").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
	
    db.close();
  });
});
});


var port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));