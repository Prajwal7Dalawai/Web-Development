const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./models/chats.js');

app.set("view engine","ejs");
app.set("vies",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")))

main().then((res)=>{console.log("connection successfull",res)})
.catch((err)=>console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chat1 = new Chat({
    from: "Prajwal",
    to: "Virat",
    message:"Hello..",
    date: new Date()
});

chat1.save().then(()=>{console.log("Chat saved")})
.catch((err)=>{console.log(err)})

app.listen(8080,()=>{
    console.log("App listening to the port 8080");
});

app.get("/",(req,res)=>{
    res.send("You are in Home page");
}
);

app.get("/chats", async (req,res)=>{
    let chats = await Chat.find();
    res.render("index.ejs",{chats});
    console.log(chats);
});