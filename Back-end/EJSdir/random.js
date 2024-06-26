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
    res.send("Welcome to the root page");
    console.log("Entered root page.")
});

app.get("/random",(req,res)=>{
    let number = Math.floor(Math.random() * 100 +1);
    res.render("Random no/random.ejs",{number});
    console.log("Entered random number generating page.")
})