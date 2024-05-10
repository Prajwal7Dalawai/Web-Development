const express = require('express')
const app = express();
const port = 8080;
const path = require("path");
//Express automatically requires EJS, Hence no need to require EJS seperately.
app.set("view engine","ejs");
//app.set("views",path.join(__dirname,"/views")); //This is used when we try to start our server from the parent directory.
app.get("/",(req,res)=>{
    res.render("homepage/home");
});

app.listen(port, (re) => {
    console.log(`Example app listening on port ${port}!`);
    });