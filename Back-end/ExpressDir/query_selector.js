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

app.get("/search",(req,res)=>{
    let qry = req.query;
    console.log(qry);
    res.send(`<h1>Search results for Query ${req.query}</h1>`);
});
app.get("*",(req,res)=>{
    res.send("<h1>NO results</h1>");
});