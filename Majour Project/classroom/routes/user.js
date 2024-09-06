const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("GET FOR POST USERS!!");
});

router.get("/:id",(req,res)=>{
    req.send("GET for SHOW POST USERS")
});

router.post("/",(req,res)=>{
    res.send("POST USERS");
});

router.delete("/:id",(req,res)=>{
    res.send("DELETE POST USETRS");
});

module.exports = router;