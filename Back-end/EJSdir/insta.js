const express = require("express");
const path = require("path");
const app = express();

const port = 8085;

app.listen(port, (re)=>{
    console.log(`You are Listening to ${port} port`);
});

app.set("view engine", "ejs");
//app.set("views",path.join(__dirname),"/views");

app.get("/",(req,res)=>{
    res.send("Welcome to the root page");
    console.log("Entered root page.")
});

app.get("/ig/:username",(req,res)=>{
let { username } = req.params;
console.log("Username is: " + username);
console.log(username);
res.render("Instagram/instagram",{username});
});