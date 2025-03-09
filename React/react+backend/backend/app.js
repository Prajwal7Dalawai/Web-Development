const express = require('express');
const app = express();
const port = 3000;
const router = require('./router/auth.js');
const connectDB = require('./utils/db.js');
const session = require('express-session');
const User = require('./model/user-schema.js');
const LocalStratergy = require('passport-local').Strategy;
const passport = require('passport');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: "your_secret_key", // Keep it secure
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStratergy(User.authenticate()));

// Serialize and Deserialize User (for sessions)
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.get('/',(req,res)=>{
    res.send('<h1>Server is on, data is transferring</h1>');
});

app.use('/api/auth',router);


connectDB().then(() => {
    app.listen(port, () => console.log("Server is listening to port", port));
}).catch((e) => {
    console.log(e);
});