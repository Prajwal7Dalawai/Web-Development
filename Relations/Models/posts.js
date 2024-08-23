const mongoose = require('mongoose');
const {Schema} = mongoose;
main().then(()=>{console.log("Connection Successfull");}).catch(err=> console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relation');
}

const orderSchema = new Schema({
    item: String,
    price: Number,
});

const customerSchema = new Schema({
    name: String,
    orders: [
    {
        type: Schema.Types.ObjectId,
        ref: "Order",
    }
]
});

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

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const Posts = mongoose.model("Posts",postSchema);
const User = mongoose.model("User",userSchema);


// const addData = async ()=>{
//     let usr = await User.findOne({username:"Sherkock Homes"});

//     let post = new Posts({
//         content: "I am The Shelock Home",
//         likes:900,
//     });

//     post.user = usr;
//     await post.save();
// }

// addData();

const getData = async ()=>{
    const result = await Posts.find({}).populate("user","username");
    console.log(result);
}

getData();