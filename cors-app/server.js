var express = require('express');
var app = express();

const uuidv4 = require('uuid/v4');
const cookieParser = require('cookie-parser');

app.use(cookieParser());

var server = app.listen(9999, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("CORS app listening at http://%s:%s", host, port)
})

app.use(function(req, res, next) {
  //TODO: Strictly validate the origin or I will hack you!
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cookie");
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/', function(req, res, next) {
  //console.log(req.cookies._v_ga)
  tracking_uuid = req.cookies.tracking_uuid
  if(!tracking_uuid){
    tracking_uuid = uuidv4()
    res.cookie('tracking_uuid', tracking_uuid, { maxAge: 900000, httpOnly: true });
  }
  res.send(tracking_uuid);
});
