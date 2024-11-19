const Listing = require('./models/listing.js');
const ExpressError = require('./utils/ExpressError.js');
const { listingSchema, reviewSchema } = require('./schema.js');
const Review = require('./models/reviews.js');
const User = require('./models/user.js');

module.exports.isLoggedIn = (request, response, next) => {
    if (!request.isAuthenticated()) {
        // Saving redirect information
        request.session.redirectUrl = request.originalUrl;
        request.flash("error", "You must be logged in to create a listing");
        return response.redirect('/login');
    }
    next();
};

module.exports.saveredirectUrl = (req, res, next) => {
    res.locals.redirectUrl = req.session.redirectUrl || "/listings";
    next();
};

module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing || !listing.owner._id.equals(res.locals.currentUser._id)) {
        req.flash("error", "You are not the owner of this listing");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

module.exports.validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body.Listing);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(", ");
        req.flash("error", errMsg);
        return res.redirect(req.headers.referer || "/listings/new"); // Redirect to form
    }
    next();
};

module.exports.validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(", ");
        req.flash("error", errMsg);
        return res.redirect(req.headers.referer || `/listings/${req.params.id}`);
    }
    next();
};

module.exports.isReviewAuthor = async (req, res, next) => {
    let { id, reviewid } = req.params;
    let review = await Review.findById(reviewid);
    if (!review || !review.author.equals(res.locals.currentUser._id)) {
        req.flash("error", "You are not the owner of this review");
        return res.redirect(`/listings/${id}`);
    }
    next();
};
