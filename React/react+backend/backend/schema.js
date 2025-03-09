const User = require('./model/user-schema');
const joi = require('joi');

const userSchema = joi.object({
    User: joi.object({
        username:joi.string().required(),
        email: joi.string().pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/).required(),
        phone: joi.string().pattern(/^[0-9]{10}$/).required()
        
    })
});

module.exports = {userSchema};