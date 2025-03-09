const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');   //for plugin
const {required, number, string} = require('joi'); //for validation

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        min:10,
        max:10
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

// Apply passport-local-mongoose plugin to the schema
userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);
module.exports = User;
