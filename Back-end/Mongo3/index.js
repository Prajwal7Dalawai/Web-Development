const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./models/chats.js');
const methodOverride = require("method-override");

app.set("view engine","ejs");
app.set("vies",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

main().then((res)=>{console.log("Connection Successfull")})
.catch((err)=>console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// let chat1 = new Chat({
//     from: "Prajwal",
//     to: "Virat",
//     message:"Hello..",
//     date: new Date()
// });

// chat1.save().then(()=>{console.log("Chat saved")})
// .catch((err)=>{console.log(err)})

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

app.get("/chats/new",(req,res)=>{
    res.render("view.ejs");
});

app.post("/chats",(req,res)=>{
    let {from , to, message} = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        message: message,
        date: new Date()
    });
   newChat.save().then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});
   res.redirect("/chats")
});

app.get("/chats/:id/edit", async (req,res)=>{
    let {id} = req.params;

    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});
});

app.put("/chats/:id",async (req,res)=>{
    let {msg:msg} = req.body;
    console.log(msg);
    let {id} = req.params;
    let updatedChat = await Chat.findByIdAndUpdate(id,{message:msg},{runValidators:true, new: true});
    console.log(updatedChat);
    res.redirect("/chats");
});

app.delete("/chats/:id",async (req,res)=>{
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
    console.log(deletedChat);
});