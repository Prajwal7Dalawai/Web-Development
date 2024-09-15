const Joi = require('joi');

const listingSchema = Joi.object({
    Listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required().min(0),
        image: Joi.string().allow("", null)
    }).required(),
});

const reviewSchema = Joi.object({
    reviews: Joi.object({
        rating: Joi.number().required(),
        Comment: Joi.string().required(),
        //createdAt: Joi.date(),

    }).required()
})

module.exports = { listingSchema , reviewSchema};