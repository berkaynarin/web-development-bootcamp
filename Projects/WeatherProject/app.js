const express = require("express");
const app = express();
const https = require("https");


app.get("/", function(req,res){

      const cityName = "London";
      const apiKey = "5ffe833dcb0c274f1482baf56d4d692d";
      const unit = "metric";
      const url = "https://api.openweathermap.org/data/2.5/weather?q="+ cityName +"&appid=" + apiKey + "&units="+ unit;
      https.get(url, function(response){
      console.log("status code: ", response.statusCode);

      response.on("data", function(data){
      const weatherData = JSON.parse(data);
      const city = weatherData
      const temp = weatherData.main.temp;
      const desc = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imgUrl= "http://openweathermap.org/img/wn/"+ icon +"@2x.png";
      res.write("<h1>Temperature in Istanbul " + temp + " Celcius </h1>");
      res.write("<h2>Description: " + desc + "</h2>");
      res.write("<img src="+ imgUrl +">");
      res.send()
      })
  })
})

app.listen(3000, function(){
  console.log("The server is listening to port 3000.");
})
