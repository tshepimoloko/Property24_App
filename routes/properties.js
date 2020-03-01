const express = require("express");
const router = express.Router(); //router object
const properties = require('../models/properties');

router.get('/', function(req,res,next){ //find all the properties, just all of them
  properties.find().then(result=>{
    res.send(result);
  });
});

//get a list from the database for specific agent
router.get('/:agentid', function(req,res,next){
  properties.find({agentid:req.params.agentid}).then(result=>{
    res.send(result);
  });
});

router.get('/:id', function(req,res,next){
  const id = req.params.id;
  properties.find({_id:id}).then(result=>{
    res.send(result);
  console.log('I am getting');
  })
});

//creates new on the list
router.post('/addproperty', function(req,res,next){
  properties.create(req.body).then(result=>{
    properties.find({address:req.body.address}).then(r=>{
      res.send(r);
    }).catch(next);
});

//update from db
router.put('/upproperty/:id', function(req,res, next){
  properties.findOneAndUpdate({_id:req.params.id});
  properties.findOne({_id:req.params.id}).then(function(properties){
      res.send(properties);
    })
  });
});

//delete from db
router.delete('/delproperty/:id', function(req,res,next){
  properties.findOneAndDelete({_id:req.params.id}).then(function(property){
    properties.findOne({_id:req.params.id}).then(function(properties){
      res.send(properties);
    });
  });
});

module.exports = router;
