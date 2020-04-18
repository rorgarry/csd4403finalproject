var express = require('express');
var mongo = require('mongodb');

var app = express();
app.use(express.json());

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

app.post('/api/insertTime', (req, res) => {
	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db("CarRental");
	  var myobj={Booking_id : 210,Date:march2020,Time:4,};
	  dbo.collection("Booking").insertOne(myobj, function(err, result) {
		if (err) throw err;
		
		console.log("1 document inserted");
		res.send(result);
		db.close();
	  });
	});
});

var port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));