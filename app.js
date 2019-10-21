const express = require('express');
const app = express();
var mongoose = require("mongoose");
var router = express.Router();
const path = require('path');
var bodyParser = require('body-parser');
mongoose.Promise = global.Promise;
var nameSchema = new mongoose.Schema({
  bcname: String,
  bename: String
});
var User = mongoose.model("User", nameSchema);




app.get('/', function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  var myData = new User(req.body);
  myData.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
}); 
}); 
app.get('/contact', function(req,res){
    res.sendFile(path.join(__dirname+'/contact.html'));
  });

app.use( express.static('public'));  
// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended: true }));



var server = app.listen(8080);

