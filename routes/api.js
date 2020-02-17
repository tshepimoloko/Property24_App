const express = require("express");
const router = express.Router(); //router object

//get a list from the database
router.get('/users', function(req,res){
  res.send({type : 'GET'});
});

//creates new on the list
router.post('/users/:id', function(req,res){
  User.create(req.body).then(function(user){
    res.send(user);
  }).catch(next);
});

// update a ninja in the db
router.put('/users/:id', function(req, res, next){
    Users.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Users.findOne({_id: req.params.id}).then(function(user){
            res.send(user);
        });
    }).catch(next);
});

//delete from db
router.delete('/:id', function(req,res,next){
  user.findByIdAndRemove({_id:req.params.id}).then(function(user){
    User.findOne({_id:req.params.id}).then(function(user){
      res.send(user);
    });
  });
});

module.exports = router;
