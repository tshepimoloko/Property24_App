const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//models
const TodoTask = require("./models/TodoTask");

dotenv.config();

app.use("/static", express.static("public"));

app.use(express.urlencoded({ extended: true}));

//connection to db
mongoose.set("useFindAndModify", false);

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
  console.log("Connected to db!");
  app.listen(3000, () => console.log("Server Up and running"));
});

//view engine configuration
app.set("view engine", "ejs");

// GET METHOD
app.get("/", (req, res) => {
  TodoTask.find({}, (err, tasks) => {
    res.render('./views/todos.ejs')
    });
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
