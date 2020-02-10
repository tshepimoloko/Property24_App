const express = require("express");
const router = express.Router(); //router object

//get a list from the database
router.get('/ninjas', function(req,res){
  res.send({type : 'GET'});
});

//creates new on the list
router.post('/ninjas/:id', function(req,res){
  res.send({type : 'POST'});
});

//update from db
router.put('/ninjas/:id', function(req,res){
  res.send({type : 'PUT'});
});

//delete from db
router.delete('/', function(req,res){
  res.send({type : 'DELETE'});
});

module.exports = router;
