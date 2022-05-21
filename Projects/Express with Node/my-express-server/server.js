const express = require("express");
const app = express();

app.get("/", function (request, response) {
  //app.get(The url of page (/ represents root), what should happen when that get request is being made to that location)
  //console.log(request);
  response.send("Hey Berkay");
});

app.get("/about", function (req, res) {
  res.send("<h1>You are in the about page</h1>");
});

app.listen(4000, function () {
  console.log("Server has started on port 4000");
});
