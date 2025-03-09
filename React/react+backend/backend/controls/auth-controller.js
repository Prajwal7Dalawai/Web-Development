const { default: mongoose } = require('mongoose');
const User = require('../model/user-schema');
const register = async(req,res)=>{
    try{
        const {username,email,phone,password} = req.body;
        const userExists = await User.findOne({email: email})
        if(userExists){
            return res.status(400).send({msg:"User already exists"});
        }
        else{
            await User.register({username,email,phone},password, (err,user)=>{
                if(err){
                    console.log(err);
                    return res.status(400).send({msg:"Failed to register user", error: err});
                }
                else{
                    return res.status(201).send({msg:"User registered successfully",user});
                }
            });
        }
    }
    catch(e){
        console.log(e);
        res.status(500).send({msg:'Internal server error'});
    }
}

const login = async(req,res)=>{
    res.json({ message: "Logged in successfully", user: req.user });
}

module.exports = {register,login};
