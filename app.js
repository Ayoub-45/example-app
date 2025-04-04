const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello, CI/CD!");
});
app.post("/hello", (req, res) => {});
module.exports = app;
