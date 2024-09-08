const express = require('express');
const app = express();
const users = require('./routes/user.js');
const posts = require('./routes/post.js');
const cookieparser = require('cookie-parser');

app.use(cookieparser());
app.get("/",(req,res)=>{
    console.dir(req.cookies.Greet);
    res.json("Hi This is Root!!");
});

app.listen(3000,()=>{
    console.log(`App is listening to port 3000`);
});

app.get('/getCookies',(req,res)=>{
    res.cookie("Greet","Namaste");
    res.cookie("madein","India");
    res.send("Got u some cookies");
});
app.use("/users",users);
app.use("/posts",posts);
app.get("/getSignedcookie",(req,res)=>{
    res.cookie("madiein","India",{signed:true});
    res.send("Cookie Sent");
})
