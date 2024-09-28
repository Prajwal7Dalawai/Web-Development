const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/WrapAsync.js');
const Listing = require('../models/listing.js');
const ExpressError = require('../utils/ExpressError.js');
const methodOverride = require('method-override');
const {listingSchema, reviewSchema} = require('../schema.js');
const {isLoggedIn, saveredirectUrl, isOwner, validateListing, validateReview, isReviewAuthor} = require('../middleware.js');
const Reviews = require('../models/reviews.js');
const listingController = require('../controls/listings.js');
const multer  = require('multer');
const {storage} = require('../cloudConfig.js')
const upload = multer({ storage });



router.get('/', wrapAsync(listingController.index));
 
 //New Listing Route
 router.get("/new", isLoggedIn,listingController.renderNewForm);
 
 //show route
 router.get('/:id',wrapAsync(listingController.showListing));
 
 //create Route
router.post("/",isLoggedIn,saveredirectUrl, upload.single('Listing[image]'),validateListing, wrapAsync(listingController.createListing));
 
 //edit route
 router.get("/:id/edit", isLoggedIn,saveredirectUrl, listingController.renderEditListing);
 
 //Update Route
 router.put("/:id",isLoggedIn,isOwner,saveredirectUrl,validateListing ,listingController.editListing);
 
 //Reviews route
 
 router.post("/:id/reviews",validateReview,isLoggedIn,wrapAsync(listingController.createReview));
 
 //delete review Route
 router.delete("/:id/reviews/:reviewid",isLoggedIn,saveredirectUrl,isReviewAuthor,wrapAsync(listingController.destroyListingReview));
 
 //delete route
 router.delete("/:id", isLoggedIn, isOwner, listingController.desytroyListing);

 module.exports = router;