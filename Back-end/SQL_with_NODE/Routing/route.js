const { faker } = require('@faker-js/faker');
const express = require('express');
const {v4:uuidv4} = require('uuid');
const sql = require('mysql2');
const port  = 8080;
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:"true"}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const connection = sql.createConnection({
    user: 'root',
    password: 'password',
    host: 'localhost',
    database: 'delta_app'
});

app.listen(port,()=>{
    console.log(`Server listening to the port ${port}`);
});

app.get("/",(req,res)=>{
    var q = `select count(*) from user`;
    try{
        connection.query(q, (err,result) => {
            if(err) throw err
            let answer = result[0]["count(*)"];
            res.render("home.ejs",{answer});
        });
    }
    catch(e){
        console.log(e);
        res.render("failure.ejs");
    }
});

app.get("/user",(req,res)=>{
    var q = "select * from user";
    try{
        connection.query(q, (err,result) => {
            if(err) throw err
            res.render("users.ejs",{result});
        });
    }
    catch(e){
        console.log(e);
        res.render("failure.ejs");
    }
});

app.get("/user/:id/edit",(req,res)=>{
    let {id} = req.params;
    console.log(id);
    var q = `select * from user where id='${id}'`;
    try{
        connection.query(q, (err,result) => {
            if(err) throw err
            console.log(result);
            details = result[0];
            res.render("edit.ejs",{details});
        });
    }
    catch(e){
        console.log(e);
        res.render("failure.ejs");
    }   
});
//Update route
app.patch("/user/:id",(req,res)=>{
    let {id} = req.params;
    let { password:formPass, username: newUsername } = req.body;
    console.log(id);
    var q = `select * from user where id='${id}'`;
    try{
        connection.query(q, (err,result) => {
            if(err) throw err
            console.log(result);
            details = result[0];
            if(formPass!=details.password){
                res.send("Unsuccessfull");
            }
            try{
                var qry = `update user set username='${newUsername}' where id='${details.id}'`;
                connection.query(qry,(err,result)=>{
                    if(err) throw err
                    res.send(result);
                });
            }
            catch(e){
                console.log(e)
                res.render("failure.ejs");
            }
            
            res.send(details);
        });
    }
    catch(e){
        console.log(e);
        res.render("failure.ejs");
    }
})
