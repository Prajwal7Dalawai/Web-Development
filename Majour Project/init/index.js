const mongoose = require('mongoose');
const initData = require('./data.js');
const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";
const Listing = require('../models/listing.js');

main().then(()=>{
    console.log("Connected to Wanderlust Database");
}).catch(()=>{
    console.log("Couldn't Connect to the database");
});

async function main() {
    await mongoose.connect(mongo_url);
}

const initDB = async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj, owner:'66e056940f01b102a8f8b0d6'}))
    await Listing.insertMany(initData.data);
    console.log("Data was initialised");
}

initDB();
