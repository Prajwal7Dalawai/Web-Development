const express = require("express");
const path = require("path");
const app = express();

const port = 8080;

app.listen(port, (re)=>{
    console.log(`You are Listening to ${port} port`);
});

app.set("view engine", "ejs");
//app.set("views",path.join(__dirname),"/views");

app.get("/",(req,res)=>{
    res.render("Interpolation/interpo.ejs");
});