const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/WrapAsync.js');
const listingController = require('../controls/listings.js');
const { isLoggedIn, saveredirectUrl, isOwner, validateListing, validateReview, isReviewAuthor } = require('../middleware.js');
const multer = require('multer');
const { storage } = require('../cloudConfig.js');
const upload = multer({ storage });
const methodOverride = require('method-override');

router.get('/', wrapAsync(listingController.index));

// New Listing Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

// Show Route
router.get('/:id', wrapAsync(listingController.showListing));

// Create Route
router.post("/", isLoggedIn, saveredirectUrl, upload.single('Listing[image]'), validateListing, wrapAsync(listingController.createListing));

// Edit Route
router.get("/:id/edit", isLoggedIn, saveredirectUrl, wrapAsync(listingController.renderEditListing));

// Update Route
router.put("/:id", isLoggedIn, isOwner, saveredirectUrl, validateListing, wrapAsync(listingController.editListing));

// Reviews Route
router.post("/:id/reviews", validateReview, isLoggedIn, wrapAsync(listingController.createReview));

// Delete Review Route
router.delete("/:id/reviews/:reviewid", isLoggedIn, saveredirectUrl, isReviewAuthor, wrapAsync(listingController.destroyListingReview));

// Delete Listing Route
router.delete("/:id", isLoggedIn, isOwner, wrapAsync(listingController.desytroyListing));

module.exports = router;
