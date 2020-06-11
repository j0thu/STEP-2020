var express = require("express");

var app = express();

app.get("/", function (req, res) {
  res.send("Hi there, welcome to my assignment");
});

app.get("/:speak/:animal", function (req, res) {
  var animal = req.params.animal;
  var speak = req.params.speak;
  res.send("The " + animal + " says " + speak);
});

app.get("/repeat/:word/:number/", function (req, res) {
  var word = req.params.word;
  var number = Number(req.params.number);
  final = "";
  for (var i = 0; i < number; i++) {
    final += word + " "; //res.send can be done only once
  }
  res.send(final);
});

app.get("*", function (req, res) {
  res.send("Sorry, Page not found");
});

app.listen(3000, function () {
  console.log("SERVER LISTENING TO 3000");
});
