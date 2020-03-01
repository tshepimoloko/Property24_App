const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const properties = require('./routes/properties');
const user = require('./routes/users');

// A test comment
// const passport = require('passport')
// .FacebookStrategy =require('passport-facebook').Strategy;

// passport.use(new FacebookStrategy{
//     agentid: facebook_app_id,
//     userSecret: facebook_app_secret,
//     callbackURL:
// })
app.use("/static", express.static("public"));//remove

app.use(express.urlencoded({ extended: true}));

mongoose.Promise = global.Promise;

app.use(bodyParser.json());         //use body-parser middleware
app.use('/properties',properties);
app.use('/auth',user);


mongoose.connect('mongodb+srv://todoListApp:test@cluster0-l6um6.mongodb.net/test?retryWrites=true&w=majority');

// mongoose.connect('mongodb://localhost/property24'); <---- USed to connect mongodb when there's no internet like loadshedding

// initialize routes
app.use('/api', require('./routes/api'));

// error handling middleware
app.use(function(err, req, res, next){
    console.log(err); // to see properties of message in our console
    res.status(422).send({error: err.message});
});

// listen for requests
app.listen(process.env.PORT || 9000, function(){
    console.log('now listening for requests');
});
