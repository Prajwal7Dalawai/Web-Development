const express = require("express");
const app = express();
//console.dir(app);
let port = 8080;
app.listen(port , ()=>{
    console.log("You are listening to " + port + " port");
});


app.use((req,res)=>{
    //console.log(req);
    console.log("Request recieved");
    //res.send("This is a basic response");
//     res.send({
//         name:"Apple",
//         color:"Silver",
//         processor:"i7"
//     });

res.send("<h2>This is my first webpage!!</h2><h3>This is my first webpage Prajwal!!</h3><h4>This is my first webpage!!</h4><h5>This is my first webpage!!</h5><h6>This is my first webpage!!</h6>")
 });