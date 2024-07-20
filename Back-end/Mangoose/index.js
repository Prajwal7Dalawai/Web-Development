const mongoose = require('mongoose');

main().then((res)=> {
    console.log("Connection Successfull");
})
.catch((err)=> console.log(err));
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/college");    //Establishing Connection
}

const userShcema = new mongoose.mongoose.Schema({   //Defining Schema
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User",userShcema); //Creating a document

const user1 = new User({
    name: "Prajwal",
    email:"prajwal@gmail.com",
    age:21
});
user1.save();   //Inserts one document into the collection

const user2 = new User({
    name: "Virat",
    email:"virat@gmail.com",
    age:21
});

user2.save()
.then((res)=>{
    console.log(res);
})
.catch((err)=> {console.log(err)} );

User.insertMany([    //inserting many data at once
    { name:"Tony", email:"tony@gmail.com", age:18 },
    { name:"Peter", email:"peter@gmail.com", age:20 },
    { name:"Bruce", email:"bruce@gmail.com", age:22 }
]).then((res)=> { console.log(res) })
.catch((err)=>{ console.log(err) })

User.find({age: {$gte: 20}}).then((res)=>{
    console.log(res);
})
.catch((err)=>{ console.log(err) });

User.updateOne({name:"Prajwal"},         {email:"prajwaldalawai123@gmail.com"}).then((res)=>{console.log(res)})
.catch((err)=>{console.log(err)});  //updating single value

User.updateMany({age:{$gt:18}},{adult:"yes"}).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});     //updating multiple values

User.deleteOne({name:"Bruce"}).then((res)=>{console.log(res);
})
.catch((err)=>{ console.log(err) });    //Deleting one document