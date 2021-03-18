const express = require("express");
var exphbs = require("express-handlebars");

const app = express();

// Middleware
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
  res.send("About");
});

const port = 3000;

app.listen(port, () => {
  console.log(`The server is running in port no ${port}`);
});
