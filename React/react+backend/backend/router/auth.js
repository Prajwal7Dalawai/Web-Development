const express = require('express');
const router = express.Router();
const authcontrollers = require('../controls/auth-controller');
console.log('Auth controllers loaded:', authcontrollers);
const passport = require('passport');
const middlewares = require('../middleware');

router.route('/register').get((req,res)=>{
    res.send("Register urself here");
})
.post(authcontrollers.register,middlewares.validateUser);

router.route('/login').get((req,res)=>{
    res.send("Login here");
})
.post(passport.authenticate('local',{failureRedirect:'/api/auth/login'}),authcontrollers.login);

module.exports = router;
