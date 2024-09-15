const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/WrapAsync.js');
const Listing = require('../models/listing.js');
const ExpressError = require('../utils/ExpressError.js');
const methodOverride = require('method-override');
const {listingSchema, reviewSchema} = require('../schema.js');
const {isLoggedIn, saveredirectUrl, isOwner, validateListing, validateReview, isReviewAuthor} = require('../middleware.js');
const Reviews = require('../models/reviews.js');



router.get('/', async(request,response)=>{
    const allListings = await Listing.find({});
    response.render("listings/index.ejs",{allListings});
 });
 
 //New Listing Route
 router.get("/new", isLoggedIn,(request,response)=>{
    {
     response.render("listings/new.ejs")
    }
    
 });
 
 //show route
 router.get('/:id',async (request,response,next)=>{
     try{
     let {id} = request.params;
 
     const listing = await Listing.findById(id)
     .populate({
        path:"reviews", 
        populate:{
            path:"author",
        },
    })
    .populate("owner");
     if(!listing){
        request.flash("error","Listing Doesn't Exist");
        response.redirect('/listings');
     }
     console.log(listing)
     response.render("listings/show.ejs",{listing});
     }
     catch(err){
         next(new ExpressError(500,"Id Doesn't Exist"));
     }
 });
 
 //create Route
 router.post("/",isLoggedIn,saveredirectUrl,validateListing,wrapAsync(async (request,response,next)=>{
   //  let {title,description,image,price,location,country} = request.body;
   const newlisting = new Listing(request.body.Listing);
   newlisting.owner = request.user._id;
   await newlisting.save();
   request.flash("success","New Listing Created");
   response.redirect("/listings");
 }
 ));
 
 //edit route
 router.get("/:id/edit", isLoggedIn,saveredirectUrl,async (request, response) => {
     let { id } = request.params;
     try {
         const listing = await Listing.findById(id);
         if(!listing){
            request.flash("error","Listing Doesn't Exist");
            response.redirect('/listings');
         }
         console.log(listing.image); // Log the listing object to verify its structure
         response.render("listings/edit.ejs", { listing });
     } catch (error) {
         console.error(error);
         response.status(500).send("Internal Server Error");
     }
 });
 
 //Update Route
 router.put("/:id",isLoggedIn,isOwner,saveredirectUrl,validateListing ,async (req,res)=>{ 
     listing = await Listing.findByIdAndUpdate(id,{...req.body.Listing});
     res.redirect(`/listings/${id}`);
 });
 
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
 router.delete("/:id", isLoggedIn, isOwner, async (req, res, next) => {
    try {
        let { id } = req.params;
        let deleted = await Listing.findByIdAndDelete(id);
        
        if (!deleted) {
            req.flash("error", "Listing not found");
            return res.redirect("/listings");
        }

        console.log(deleted);
        req.flash("success", "Listing deleted successfully");
        res.redirect("/listings");
    } catch (error) {
        next(error); // Passes errors to the error-handling middleware
    }
});

 module.exports = router;