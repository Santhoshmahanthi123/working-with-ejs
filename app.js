const express = require("express");
const app = express();
app.get('/',function(req,res){
    console.log("You are in the home page!");
    res.render("home.ejs");
   
});
app.get('/:thing',function(req,res){
    var thing = req.params.thing;
    res.render("love.ejs",{thingVar:thing});
    
});
app.get('/:thing/:about',function(req,res){
    var about = req.params.about;
    res.render("aboutme.ejs");
    
});
app.get('/:thing/:about/:contact',function(req,res){
    var contact = req.params.contact;
    res.render("contact.ejs");
    
});

app.get('*',function(req,res){
    console.log("Searching page is not available!");
    res.send("<h1>Page not available!</h1>");
});
app.listen(3000,function(){
    console.log("server started at port 3000");
});