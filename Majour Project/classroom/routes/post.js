const express = require('express');
const router = express.Router();
router.get("/",(req,res)=>{
    res.send("GET FOR POST posts!!");
})

router.get("/:id",(req,res)=>{
    req.send("GET for SHOW POST posts")
});

router.post("/",(req,res)=>{
    res.send("POST posts");
})

router.delete("/:id",(req,res)=>{
    res.send("DELETE POST USETRS");
})

module.exports = router;