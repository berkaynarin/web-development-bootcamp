const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // Meaning: Parse only urlencoded objects and accept any kind of value (extended: true)

app.listen(3000, function (req, res) {
  console.log("Server has started on port 3000");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  // This is our method to provide a response to POST requests
  var n1 = parseInt(req.body.firstNum);
  var n2 = parseInt(req.body.secondNum);
  "The sum of " + n1 + " and " + n2 + " is " + (n1 + n2);

  res.send("The sum of " + n1 + " and " + n2 + " is " + (n1 + n2));
});
