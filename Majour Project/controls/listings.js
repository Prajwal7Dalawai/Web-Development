const Listing = require('../models/listing.js');
const Reviews = require('../models/reviews.js');
const ExpressError = require('../utils/ExpressError.js');

module.exports.index = async (request, response) => {
    const allListings = await Listing.find({});
    response.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (request, response) => {
    response.render("listings/new.ejs");
};

module.exports.showListing = async (request, response, next) => {
    try {
        let { id } = request.params;
        const listing = await Listing.findById(id)
            .populate({
                path: "reviews",
                populate: { path: "author" },
            })
            .populate("owner");
        if (!listing) {
            request.flash("error", "Listing Doesn't Exist");
            return response.redirect('/listings');
        }
        response.render("listings/show.ejs", { listing });
    } catch (err) {
        next(new ExpressError(500, "ID doesn't exist"));
    }
};

module.exports.createListing = async (request, response) => {
    const { path: url, filename } = request.file;
    const newListing = new Listing(request.body.Listing);
    newListing.owner = request.user._id;
    newListing.image = { url, filename };
    await newListing.save();
    request.flash("success", "New Listing Created");
    response.redirect("/listings");
};

module.exports.renderEditListing = async (request, response) => {
    const { id } = request.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        request.flash("error", "Listing Doesn't Exist");
        return response.redirect('/listings');
    }
    let originalUrl = listing.image.url;
    let newUrl = originalUrl.replace("/upload","/upload/h_300,w_250");
    response.render("listings/edit.ejs", { listing,newUrl });
};

module.exports.editListing = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findByIdAndUpdate(id, { ...req.body.Listing });
    if (req.file) {
        const { path: url, filename } = req.file;
        listing.image = { url, filename };
    }
    await listing.save();
    req.flash("success", "Listing Updated");
    res.redirect(`/listings/${id}`);
};

module.exports.desytroyListing = async (req, res) => {
    const { id } = req.params;
    const deleted = await Listing.findByIdAndDelete(id);
    if (!deleted) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }
    req.flash("success", "Listing deleted successfully");
    res.redirect("/listings");
};

module.exports.destroyListingReview = async (req, res) => {
    const { id, reviewid } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewid } });
    await Reviews.findByIdAndDelete(reviewid);
    req.flash("success", "Review deleted successfully");
    res.redirect(`/listings/${id}`);
};

module.exports.createReview = async (req, res) => {
    const listing = await Listing.findById(req.params.id);
    const newReview = new Reviews(req.body.reviews);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success", "New Review Added");
    res.redirect(`/listings/${listing._id}`);
};
