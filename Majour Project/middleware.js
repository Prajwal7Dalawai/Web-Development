module.exports.isLoggedIn = (request,response,next)=>{
    if(!request.isAuthenticated()){
        //saving redirect information
        request.session.redirectUrl = request.originalUrl;
        request.flash("error","You must be logged in to create listing");
        return response.redirect('/login');
    }
    next();
}

module.exports.saveredirectUrl  = (req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};