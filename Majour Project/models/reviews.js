const { type } = require('express/lib/response');
const { required, ref } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    Comment: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    author:{
        type: Schema.Types.ObjectId,
        ref: "User",
    }
});


const Review = mongoose.model("Reviews",reviewSchema);
module.exports = Review