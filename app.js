const express = require("express");
var exphbs = require("express-handlebars");
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

//Index Routing
app.get("/", (req, res) => {
  res.render("index");
});

// About Routing
app.get("/about", (req, res) => {
  res.render("about");
});

const port = 3000;

app.listen(port, () => {
  console.log(`The server is running in port no ${port}`);
});
