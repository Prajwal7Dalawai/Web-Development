const Listing = require('./models/listing.js');
const ExpressError = require('./utils/ExpressError.js');
const {listingSchema, reviewSchema} = require('./schema.js');
const Review = require('./models/reviews.js');

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
    else{
        res.locals.redirectUrl = "/listings";
    }
    next();
};

module.exports.isOwner = async (req,res,next)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currentUser._id)){
        req.flash("error","You are not the owner of this listing");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

module.exports.validateListing = (req,res,next) =>{
    let {error} = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }
    else{
        next();
    }
};

module.exports.validateReview = (req,res,next) =>{
    let {error} = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }
    else{
        next();
    }
};

module.exports.isReviewAuthor = async (req,res,next)=>{
    let {id, reviewid} = req.params;
    let review = await Review.findById(reviewid);
    console.log(review.author);
    if(!review.author.equals(res.locals.currentUser._id)){
        req.flash("error","You are not the owner of this Review");
        return res.redirect(`/listings/${id}`);
    }
    next();
}