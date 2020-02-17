const express = require("express");
const router = express.Router(); //router object
const user = require('../models/user');

//get a list from the database
router.post('/signup', function(req,res){


  //encrypt password
    const User = {
      name:req.body.name,
      surname:req.body.surname,
      email:req.body.email,
      password:req.body.password,
      age:req.body.age
    }
    console.log(User);
    user.create(User).then(result=>{
    user.find({email:req.body.email}).then(r=>{
      if(r.length == 1){
        res.send({user_id:r[0]._id});
      }else{
        res.send("something went wrong");
      }
    })
  })
});

//creates new on the list
router.post('/login', function(req,res){
  user.find({email:req.body.email}).then(result=>{
    if (result[0].password == req.body.password){
    res.send({user_id:result[0]._id});
    }
    else {
      res.send("wrong email or password");
    }
  })
});

//update from db
router.put('/users/:id', function(req, res, next){
    Users.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Users.findOne({_id: req.params.id}).then(function(user){
            res.send(user);
            //error  handling
        });
    }).catch(next);
});


// delete a ninja from the db
router.delete('/users/:id', function(req, res, next){
    User.findByIdAndRemove({_id: req.params.id}).then(function(user){
        res.send(user);
        //error handle
    }).catch(next);
});

module.exports = router;
