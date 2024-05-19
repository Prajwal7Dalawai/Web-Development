const express = require("express");
const path = require("path");
const app = express();
const instadata = require("./views/Instagram/data.json");

const port = 8085;

app.listen(port, (re)=>{
    console.log(`You are Listening to ${port} port`);
});

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.static("public"));  //Must and should folder named public must be there in EJS directory.
app.set(express.static(path.join(__dirname,"/public")));


app.get("/",(req,res)=>{
    res.send("Welcome to the root page");
    console.log("Entered root page.")
});

app.get("/instagram.com/:username",(req,res)=>{
let { username } = req.params;
const data = instadata[username];
const followers = ["adam","pushpa","kgf","kantara"];
console.log(data);
console.log("Username is: " + username);
console.log(username);
if(data)
res.render("Instagram/instagram",{username,data,followers});
else
res.render("Instagram/error.ejs");
});