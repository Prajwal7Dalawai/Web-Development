const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/WrapAsync.js');
const Listing = require('../models/listing.js');
const ExpressError = require('../utils/ExpressError.js');
const methodOverride = require('method-override');
const {listingSchema, reviewSchema} = require('../schema.js');
const {isLoggedIn, saveredirectUrl, isOwner, validateListing, validateReview, isReviewAuthor} = require('../middleware.js');
const Reviews = require('../models/reviews.js');
const listingController = require('../controls/listings.js')


router.get('/', wrapAsync(listingController.index));
 
 //New Listing Route
 router.get("/new", isLoggedIn,listingController.renderNewForm);
 
 //show route
 router.get('/:id',wrapAsync(listingController.showListing));
 
 //create Route
 router.post("/",isLoggedIn,saveredirectUrl,validateListing,wrapAsync(listingController.createListing));
 
 //edit route
 router.get("/:id/edit", isLoggedIn,saveredirectUrl, listingController.renderEditListing);
 
 //Update Route
 router.put("/:id",isLoggedIn,isOwner,saveredirectUrl,validateListing ,listingController.editListing);
 
 //Reviews route
 
 router.post("/:id/reviews",validateReview,isLoggedIn,wrapAsync(async (req,res)=>{
   let listing = await  Listing.findById(req.params.id);
   let newReview = new Reviews(req.body.reviews);
   newReview.author = req.user._id;
   console.log(newReview);
   listing.reviews.push(newReview);
   await newReview.save();
   await listing.save();
   console.log("new Review saved");
   res.redirect(`/listings/${listing._id}`);
 })
 );
 
 //delete review Route
 router.delete("/:id/reviews/:reviewid",isLoggedIn,saveredirectUrl,isReviewAuthor,wrapAsync(async (req, res, next) => {
    let {id, reviewid} = req.params; // Use 'reviewid' to match the route parameter
 
     // Find the listing by ID and remove the review reference
     let listing = await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewid } });
 
     // Delete the actual review document from the Reviews collection
     let review = await Reviews.findByIdAndDelete(reviewid);
 
     res.redirect(`/listings/${id}`);
 }));
 
 //delete route
 router.delete("/:id", isLoggedIn, isOwner, listingController.desytroyListing);

 module.exports = router;