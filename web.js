var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
//try {
//  var index_data = fs.readFileSync('index.html')
//} catch (err) {
  // If the type is not what you want, then just throw the error again.
  //if (err.code !== 'ENOENT') throw err;

  // Handle a file-not-found error
//}


//console.log(index_data);
//var buffer = new Buffer(100);
//buffer.write(index_data);

//console.log(buffer.toString('utf8',0,50));

app.get('/', function(request, response) {
  //response.send(buffer.toString('utf8',0,50));
var k = fs.readFileSync('./index.html','utf8');
  response.send( k );
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
