const express = require("express");

const app = express();

//Index Routing
app.get("/", (req, res) => {
  res.send("Index");
});

// About Routing
app.get("/about", (req, res) => {
  res.send("About");
});

const port = 3000;

app.listen(port, () => {
  console.log(`The server is running in port no ${port}`);
});
