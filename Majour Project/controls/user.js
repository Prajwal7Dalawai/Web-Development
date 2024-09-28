const Listing = require('../models/listing');

module.exports.signup = async (req,res)=>{
    try{
    let {username, email, password} = req.body;
    const user = new User({email, username}); // Create a User instance
    const registeredUser = await User.register(user, password); // Correctly pass the instance
    req.login(registeredUser, (err)=>{
        if(err){
            return next(err);
        }
        req.flash("success", "You have been Registered");
    res.redirect('/listings');
    })
    }
    catch(e){
        req.flash('error',e.message);
        res.redirect('/listings');
    }
};

module.exports.login = async (req,res)=>{
    req.flash("success","You are successfully Logged in!");
    res.redirect(res.locals.redirectUrl);
}

module.exports.logout = (req,res,next)=>{
    req.logout((err)=>{
        if(err){
           return next(err);
        }
        req.flash("success","You are successfully logged out");
        res.redirect('/listings');
    });
};