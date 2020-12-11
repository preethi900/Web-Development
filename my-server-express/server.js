const express   = require("express");
const app  =  express();

app.get("/",function(req,res){
  res.send("<h1>Hello</h1>");
});

app.get("/contact",function(req,res){
  res.send("Contact me at : preethi900@gmail.com");
});

app.get("/about",function(req,res){
  res.send("I am finally a Full Stack Developer");
});


app.listen(3000,function(){
  console.log("Server started on port 3000");
});
