const express = require('express');
const app = express();
const users = require('./routes/user.js');
const post = require('./routes/post.js');
const session = require('express-session');
const flash = require('connect-flash');
const path = require('path');
const { name } = require('ejs');
const sessionOptions = {
    secret:"superSecret",
    resave:false,
    saveUninitialized:true
}
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(session(sessionOptions));
app.use(flash())

app.get("/test",(req,res)=>{
    res.send("Test Successfull");
});

// app.get("/reqCount",(req,res)=>{
//     if(req.session.count){
//         req.session.count++;
//     }
//     else{
//         req.session.count = 1;
//     }
//     res.send(`You have requested this page ${req.session.count} times`);
// })

app.use((req,res,next)=>{
    res.locals.errorMsg = req.flash('error');
    res.locals.message = req.flash("success");
    res.locals.name = req.session.name;
    next();
});

app.get("/register",(req,res)=>{
    let {name="Anonymous"} = req.query;
    req.session.name = name;
    console.log(req.session);
    if(name === "Anonymous"){
        req.flash("error","user Not Registered");
    }
    else{
    req.flash("success","User Registered Successfully");
    }
    res.redirect("/hello");
})

app.get("/hello",(req,res)=>{
    res.render("page.ejs");
})
app.listen(7777, ()=>{
    console.log("Server Is listening to port 7777");
})