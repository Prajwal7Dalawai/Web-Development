const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const wrapAsync = require('../utils/WrapAsync.js');
const passport = require('passport');
const {saveredirectUrl} = require('../middleware.js');
const userController = require('../controls/user.js');

router.route("/signup")
.get((req,res)=>{
    res.render("users/signup.ejs")
})
.post(wrapAsync(userController.signup));

router.post("/signup",wrapAsync(userController.signup));

router.get("/login",(req,res)=>{
    res.render("users/login.ejs");
});

router.route("/login")
.post(saveredirectUrl,passport.authenticate("local",{failureRedirect:'/login',failureFlash: true}),userController.login)
.get((req,res)=>{
    res.render("users/login.ejs");
});

router.post("/login",saveredirectUrl,passport.authenticate("local",{failureRedirect:'/login',failureFlash: true}),userController.login);

router.get("/logout",userController.logout);
module.exports = router;