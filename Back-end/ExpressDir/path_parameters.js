const express = require("express");
const app = express();
//console.dir(app);
let port = 8080;
app.listen(port , ()=>{
    console.log("You are listening to " + port + " port");
});


app.get('/', (req, res) => {
    //res.send("You visited root path...");
    console.log("Visited root page.");
    res.send("<h1>You contacted root path</h1>");       //This message will be displayed as a resonse when we try to access this particular webpage.  
});

app.get("/:username/:id",(req,res)=>{
    let {username,id} = req.params
    console.log(id);
    res.send(`<h1>Welcome to the page of @${username}</h1>`);
})
app.get("*",(req,res)=>{
    res.send("<h1>This page does not exist.</h1>");
});

//Similarly, this type of Technique is applicable for GET, POST, PUT,etc.....