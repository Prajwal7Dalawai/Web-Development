const Listing = require('../models/listing');

module.exports.index = async(request,response)=>{
    const allListings = await Listing.find({});
    response.render("listings/index.ejs",{allListings});
 };

module.exports.renderNewForm = (request,response)=>{
    {
     response.render("listings/new.ejs")
    }
    
 };

module.exports.showListing = async (request,response,next)=>{
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
};

module.exports.createListing = async (request,response,next)=>{
    //  let {title,description,image,price,location,country} = request.body;
    const newlisting = new Listing(request.body.Listing);
    newlisting.owner = request.user._id;
    await newlisting.save();
    request.flash("success","New Listing Created");
    response.redirect("/listings");
  };

module.exports.renderEditListing = async (request, response) => {
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
}

module.exports.editListing = async (req,res)=>{ 
    listing = await Listing.findByIdAndUpdate(id,{...req.body.Listing});
    res.redirect(`/listings/${id}`);
};

module.exports.desytroyListing = async (req, res, next) => {
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
};