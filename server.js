const express = require("express");
const app = express();



 app.get("/",function(req,res){
res.send("hell0");
 })
app.listen(3000 ,function(){
console.log("the website is runnning at the port 3000")
});

