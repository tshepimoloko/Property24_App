const express = require("express");
const router = express.Router(); //router object
const properties = require('../models/properties');

//get a list from the database
router.get('/', function(req,res){

  properties.find({}).then(result=>{
    res.send(result);
  })
});

//creates new on the list
router.post('/addproperty', function(req,res){
  properties.create(req.body).then(result=>{
    properties.find({address:req.body.address}).then(r=>{
      res.send(r);
    })
  })
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
