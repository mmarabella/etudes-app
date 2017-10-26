var sqlite3 = require('sqlite3').verbose();

const express = require('express')
const app = express()

//TDOD 4: switch databases
//TODO 5: deploy to heroku (connected with 4)
let db = new sqlite3.Database('./etudes.db', (err) => {
 	if (err) {
 		console.error(err.message);
	}
	console.log('Connected to the etudes database.');
});

//TODO 1: connect static and dynamic site
//app.get('/', function(req, res){
	// serve the index.html page here
//})

//TODO 2: include difficulty in query
//TODO 3: format the response to not be just a string (connected with TODO 1)
var queryResult = []
app.get('/:difficulty/:exercise', function (req, res) {
	//db.serialize(() => {

	  var query = "SELECT * FROM tbl1 WHERE technique = '" + req.params.difficulty + "' AND difficulty = '" + req.params.exercise + "'";
	  db.each(query, function(err, row) {
	    if (err) {
	      console.error(err.message);
	    }
	    queryResult.push(row.composer);
	  });
	  res.send(queryResult);
	//});

	// db.close();

  // res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

//" + req.params.exercise + "

