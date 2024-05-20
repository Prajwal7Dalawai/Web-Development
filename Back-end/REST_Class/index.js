const { log } = require("console");
const express = require("express");
const { userInfo } = require("os");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));

app.listen(port, ()=>{
    console.log(`You are listening to ${port}`);
});

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));

app.set(express.static("public"));
app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        id : uuidv4(),
        username: "apnacollege",
        content: "I love coding",
    },
    {
        id : uuidv4(),
        username: "prajwal_dalawai",
        content: "Consistency is a key",
    },
    {
        id : uuidv4(),
        username: "prateek_psp",
        content: "Work hard Until Success chases you",
    },
    {
        id : uuidv4(),
        username: "ankith_naik",
        content:"My Life My rules",
    },
    {
        id : uuidv4(),
        username: "niveditha_hiremath",
        content: "Life gets interesting when it gets harder",
    },
    {
        id : uuidv4(),
        username: "bhavanahottigoudar",
        content: "Create your Own Happiness",
    },
    {
        id : uuidv4(),
        username: "darshanchavan",
        content: "Life us peaceful when you stop caring about everything",
    },
    {
        id : uuidv4(),
        username: "ananyagaonkar",
        content: "Live a life, Make it large",
    }
];

app.get("/",(req,res)=>{
    res.send("Server is Working well!!");
});

app.get("/post",(req,res)=>{
    res.render("quora.ejs",{posts});
});

app.get("/post/new",(req,res)=>{
    res.render("createNewPost.ejs");
});

app.post("/post",(req,res)=>{
    console.log(req.body);
    let id = uuidv4();
    let {username, content} = req.body;
    posts.push({id,username,content});
   // res.send("Post Request Working");
    res.redirect("/post");
});

app.get("/post/:id", (req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    //res.send("Request working");
    res.render("showParticularPost.ejs",{post});
});

app.patch("/post/:id", (req,res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    console.log(req.body.content);
    let post = posts.find((p)=> id === p.id);
    post.content = newContent;
    console.log(post);
    console.log(id);
   // res.send("Patch request working");
    res.redirect("/post");
});

app.get("/post/:id/edit", (req,res)=>{
    let { id } = req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("editForm.ejs",{post});
});

app.delete("/post/:id", (req,res)=>{
    let { id } = req.params;
    posts = posts.filter((p)=> id !== p.id);
    //res.send("Delete Success");
    res.redirect("/post");
})