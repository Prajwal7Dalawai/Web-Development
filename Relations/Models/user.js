const mongoose = require('mongoose');
const {Schema} = mongoose;
main().then(()=>{console.log("Connection Successfull");}).catch(err=> console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relation');
}

const userSchema = new Schema({
    username: String,
    addresses:[
        {
            //  _id: false,  this is to stop generating the id for each address field
            location: String,
            city: String,
        },
    ],
});
const User = mongoose.model("User",userSchema);
async function addUser() {
    const user1 = new User({
        username:"Sherkock Homes",
        addresses:[{
            location:"221B Baker Street",
            city: "London"
        }]
    });
    
    user1.addresses.push({location:"Chirch Street",city:"Bengaluru"});
    let result = await user1.save();
    console.log(result); 
}

addUser();

module.exports = {User};