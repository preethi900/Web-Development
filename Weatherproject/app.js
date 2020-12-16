const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const https = require("https");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
  const query = req.body.cityname;
  const apiKey = "****************************";
  const unit = "imperial";
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&units="+unit+"&appid="+apiKey;
  https.get(url,function(response){
    console.log(response.statusCode);
    response.on("data",function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const iconURL = "https://openweathermap.org/img/wn/"+icon+"@2x.png";
      res.write("<p> The weather is currently " + description + "<p>");
      res.write("<h1>The temperature in " +query+ " is " + temp + " degrees fahrenheit.</h1>");
      res.write("<img src=" + iconURL + ">");
      res.send();
    });
  });
});


app.listen(3000,function(){
  console.log("Server started on port 3000");
});
