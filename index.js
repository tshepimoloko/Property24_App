const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const properties = require('./routes/properties')

app.use("/static", express.static("public"));

app.use(express.urlencoded({ extended: true}));

mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use('/properties',properties);

mongoose.connect('mongodb+srv://todoListApp:test@cluster0-l6um6.mongodb.net/test?retryWrites=true&w=majority');

// GET METHOD
app.get("/", (req, res) => {
  // TodoTask.find({}, (err, tasks) => {
    res.send('Hello');
    // });
});

//POST METHOD
app.post('/',async (req, res) => {
const todoTask = new TodoTask({
    content: req.body.content
});
try {
      await todoTask.save();
      res.redirect("/");
      } catch (err) {
      res.redirect("/");
    }
  });
  app.listen(process.env.PORT || 3000);
