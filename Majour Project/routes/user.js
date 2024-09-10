const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const wrapAsync = require('../utils/WrapAsync.js');
const passport = require('passport');

router.get("/signup",(req,res)=>{
    res.render("users/signup.ejs")
});

router.post("/signup",wrapAsync( async (req,res)=>{
    try{
    let {username, email, password} = req.body;
    const user = new User({email, username}); // Create a User instance
    const registeredUser = await User.register(user, password); // Correctly pass the instance
    req.flash("success", "You have been Registered");
    res.redirect('/listings');
    }
    catch(e){
        req.flash('error',e.message);
        res.redirect('/listings');
    }
}));

router.get("/login",(req,res)=>{
    res.render("users/login.ejs");
});

router.post("/login", passport.authenticate("local",{failureRedirect:'/login',failureFlash: true}),async (req,res)=>{
    req.flash("success","You are successfully Logged in!")
    res.redirect('/listings');
})
module.exports = router;