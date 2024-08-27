const mongoose = require('mongoose');
const schema = mongoose.Schema;
const Review = require('./reviews.js');

const listingSchema = new schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image: {
        type: String,
        set: (v) => v === "" ? "https://unsplash.com/photos/a-lighthouse-on-top-of-a-rocky-cliff-UGjaxpQnz8M" :  String(v)
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
               type: mongoose.Schema.Types.ObjectId,
               ref:"Reviews"
        }
    ]
});

listingSchema.post("findOneAndDelete",async (listing)=>{
    if(listing)
    await Review.deleteMany({_id: {$in: listing.reviews}});
})

const listing = mongoose.model("listings",listingSchema);

module.exports = listing;