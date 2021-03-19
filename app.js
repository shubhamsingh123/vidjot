const express = require("express");
var exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

// connect to mongoose
mongoose
  .connect("mongodb://localhost/vidjot-dev", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MONGODB CONNECTED..."))
  .catch((err) => console.log(err));

// Load Idea Model
require("./models/Idea");

const Idea = mongoose.models("ideas");

// handlebars Middleware
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");

//body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Index Routing
app.get("/", (req, res) => {
  res.render("index");
});

// About Routing
app.get("/about", (req, res) => {
  res.render("about");
});

// Add idea Form
app.get("/ideas/add", (req, res) => {
  res.render("ideas/add");
});

// Process form
app.post("/ideas", (req, res) => {
  let errors = [];

  if (!req.body.title) {
    errors.push({ title: "Please add a title" });
  }
  if (!req.body.details) {
    errors.push({ title: "Please add some details" });
  }
  if (errors.length > 0) {
    res.render("ideas/add", {
      errors: errors,
      title: req.body.title,
      details: req.body.details,
    });
  } else {
    res.send("Passed");
  }
});

const port = 3000;

app.listen(port, () => {
  console.log(`The server is running in port no ${port}`);
});
