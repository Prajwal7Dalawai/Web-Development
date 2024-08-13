const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8080;
const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";
const Listing = require('./models/listing.js');
const path = require('path');

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));

main().then(()=>{
    console.log("Connected to Wanderlust Database");
}).catch(()=>{
    console.log("Couldn't Connect to the database");
});

async function main() {
    await mongoose.connect(mongo_url);
}

app.listen(port,()=>{
    console.log("App is Listening to port no: " +
         port
    );
});

app.get("/",(req,res)=>{
    res.send("Hi there, This is root page");
});

app.get("/testListing",async (req,res)=>{
    let sampleListing = new Listing({
        title: "My new villa",
        description: "By the beach",
        price: 1200,
        location: "Udupi, Karnataka",
        country: "India"
    });

    await sampleListing.save();
    console.log("Listing was saved");
    res.send("Successfull Listing;");
});

//listings route
app.get('/listings', async(request,response)=>{
   const allListings = await Listing.find({});
   console.log(allListings);
   response.render("listings/index.ejs",{allListings});
});

//New Listing Route
app.get("/listings/new",(request,response)=>{
    response.render("/listings/new.ejs")
});

//show route
app.get('/listings/:id',async (request,response)=>{
    let {id} = request.params;

    const listing = await Listing.findById(id);
    response.render("listings/show.ejs",{listing});
});

