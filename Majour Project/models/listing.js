const mongoose = require('mongoose');
const schema = mongoose.Schema;

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
    country: String
});

const listing = mongoose.model("listings",listingSchema);

module.exports = listing;