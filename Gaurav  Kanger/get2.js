var express = require('express');
var mongo = require('mongodb');

var app = express();
app.use(express.json());

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

app.get('/api/Car', (req, res) => {
	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db("CarRental");
	  dbo.collection("Booking").find({}).toArray(function(err, result) {
		if (err) throw err;
		var Products = result.find(c => c.city === req.params.city);
		if (!Products) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>');
		console.log(result);
		res.send(Products);
		db.close();
	  });
	});
});

var port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));