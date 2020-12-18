const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/getDate.js");

const app = express();
app.set("view engine" ,"ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
const items = ["Work Hard","Eat Healthy","Sleep well"]; //Arrays can be const in JS.Even if its const you can push.Same applies to Objects.You cannot asign a new array to a const variable.
const workItems = [];

app.get("/",function(req,res){
  const day = date.getDate();
  res.render("list" ,{listTitle : day,newListItems : items});
});

app.post("/",function(req,res){
  const item = req.body.ToDo;
  if(req.body.list === "WorkList") {
    workItems.push(item);
    res.redirect("/work")
  }else {
    items.push(item);
    res.redirect("/");
  }

});
app.get("/work",function(req,res){
  res.render("list" ,{listTitle : "WorkList",newListItems : workItems });
});







app.listen(3000,function(){
  console.log("Server is started in port 3000");
});
