const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const port = 8080;
const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";
const Listing = require('./models/listing.js');
const path = require('path');
const ejsMate = require('ejs-mate');
app.engine("ejs",ejsMate);
const wrapAsync = require('./utils/WrapAsync.js');
const ExpressError = require('./utils/ExpressError.js');
const {listingSchema, reviewSchema} = require('./schema.js');
app.set("view engine","ejs");
const Reviews = require('./models/reviews.js');
const listings = require('./routes/listing.js');
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"/public")));
app.use('/listings',listings);
// // Utility Middleware logger
// app.use((req,res,next)=>{
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method);
//     console.log(req.hostname);
//     console.log(req.path);
//     console.log(req.time);
//     next();
// });


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


app.get("/error",(req,res)=>{
    res.render("listings/error.ejs",{message});
});


app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page not found"));
});

app.use((err, req, res, next) => {
    const { statusCode = 500, message = "Something went wrong" } = err;
    res.status(statusCode).render("listings/error.ejs", { message,err });
});