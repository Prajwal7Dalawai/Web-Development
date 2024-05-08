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

app.get('/search',(req,response)=>{       //This message will be displayed as a resonse when we try to access this particular webpage.
    //response.send("Search Engine Temporarily Not available..");
    console.log("Visited search Engine..");
    response.send("<h1>Search engine currently unavailable!</h1>");
});

app.get('/contact',(req,response)=>{
    //response.send("You visited Contact-Us page...")
    console.log("Visited contact-us page...");
    response.send("<h1>Contact 8310637365...</h1>");     //This message will be displayed as a resonse when we try to access this particular webpage.
});

app.get("*",(req,res)=>{
    res.send("<h1>This page does not exist.</h1>");
});

//Similarly, this type of Technique is applicable for GET, POST, PUT,etc.....