var http = require("http");
var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "views");
app.get("/", (req, res) => {
  res.render("main");
});
var server = app.listen(3000);