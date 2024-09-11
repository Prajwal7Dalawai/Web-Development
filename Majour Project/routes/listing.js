const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/WrapAsync.js');
const Listing = require('../models/listing.js');
const ExpressError = require('../utils/ExpressError.js');
const methodOverride = require('method-override');
const {listingSchema, reviewSchema} = require('../schema.js');
const {isLoggedIn, saveredirectUrl} = require('../middleware.js');
const validateListing = (req,res,next) =>{
    let {error} = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }
    else{
        next();
    }
};

const validateReview = (req,res,next) =>{
    let {error} = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }
    else{
        next();
    }
};


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
 
     const listing = await Listing.findById(id).populate("reviews");
     if(!listing){
        request.flash("error","Listing Doesn't Exist");
        response.redirect('/listings');
     }
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
 router.put("/:id",isLoggedIn,saveredirectUrl,validateListing ,async (req,res)=>{
     let {id} = req.params; 
     const listing = await Listing.findByIdAndUpdate(id,{...req.body.Listing});
     res.redirect(`/listings/${id}`);
 });
 
 //Reviews route
 
 router.post("/:id/reviews",validateReview,wrapAsync(async (req,res)=>{
   let listing = await  Listing.findById(req.params.id);
   let newReview = new Reviews(req.body.reviews);
   listing.reviews.push(newReview);
   await newReview.save();
   await listing.save();
   console.log("new Review saved");
   res.redirect(`/listings/${listing._id}`);
 })
 );
 
 //delete review Route
 router.delete("/:id/reviews/:reviewid",isLoggedIn,saveredirectUrl,wrapAsync(async (req, res, next) => {
     const { id, reviewid } = req.params; // Use 'reviewid' to match the route parameter
 
     // Find the listing by ID and remove the review reference
     let listing = await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewid } });
 
     // Delete the actual review document from the Reviews collection
     let review = await Reviews.findByIdAndDelete(reviewid);
 
     res.redirect(`/listings/${id}`);
 }));
 
 
 //Delete Route
 router.delete("/:id", async (req,res)=>{
     let {id} = req.params;
     let deleted = await Listing.findByIdAndDelete(id);
     console.log(deleted);
     res.redirect("/listings")
 });

 module.exports = router;