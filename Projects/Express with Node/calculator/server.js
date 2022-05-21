const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(4000, function (req, res) {
  console.log("Server has started on port 4000");
});

app.get("/bmicalculator", function (req, res) {
  //When the user makes a GET request to '/bmicalculator' route
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function (req, res) {
  //When the user makes a POST request to '/bmicalculator' route
  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);

  res.send(
    "The result of the BMI calculation is: " + weight / (height * height)
  );
});
