const express = require("express");

const app = express();

const port = 3000;

app.listen(port, (req, res) => {
  console.log(`The server is running in port no ${port}`);
});
