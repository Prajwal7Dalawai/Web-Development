const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const port = 8080;
const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";
const Listing = require('./models/listing.js');
const path = require('path');
const ejsMate = require('ejs-mate');
const wrapAsync = require('./utils/WrapAsync.js');
const ExpressError = require('./utils/ExpressError.js');
const {listingSchema, reviewSchema} = require('./schema.js');
const Reviews = require('./models/reviews.js');
const listingsRouter = require('./routes/listing.js');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const localStartergy = require('passport-local');
const User = require('./models/user.js');
const userRouter = require('./routes/user.js');
const sessionOption = {
    secret: "mysupersecretcode",
    resave:false,
    saveUninitialized: true,
    cookie:{
        expires: Date.now() + (7*24*60*60*1000),
        maxAge: 7*24*60*60*1000,
        httpOnly:true,
    },
};
app.use(session(sessionOption));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStartergy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use((req,res,next)=>{
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currentUser = req.user;
    next();
});
app.engine("ejs",ejsMate);
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"/public")));
app.use('/listings',listingsRouter);
app.use("/",userRouter)

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

// app.get("/demoUser",async (req,res)=>{
//     let fakeUser = new User({
//         email:"prajwal@gmail.com",
//         username:"prajwal_dalawai",
//     });
//     let registeredUser = await User.register(fakeUser,"helloworld");
//     res.send(registeredUser);
// });



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