const mongoose = require('mongoose');
const Chat = require('./models/chats.js');

main().then((res)=>{console.log("connection successfull")})
.catch((err)=>console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

let chat1 = new Chat({
    from: "Prajwal",
    to: "Virat",
    message:"Hello..",
    date: new Date()
});

let chats = [
    {
        from:"Prajwal",
        to:"Rakesh",
        message:"Matte, En Samachara",
        date: new Date()
    },
    {
        from:"rakesh",
        to:"Prajwal",
        message:"Mattenu illa bhai",
        date:new Date()
    },
    {
        from:"Prajwal",
        to:"Rakesh",
        message:"Sari, ninge matte sigtini",
        date: new Date()
    },
    {
        from:"Rakesh",
        to:"Prajwal",
        message:"Aytu, Bye",
        date: new Date()
    },
]

Chat.insertMany(chats)
