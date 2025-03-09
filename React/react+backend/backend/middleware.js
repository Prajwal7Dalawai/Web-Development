const validations = require('./schema');
const User = require('./model/user-schema');

const validateUser = (req,res,next)=>{
    let {err} = validations.userSchema.validate(req.body.User)
    if(err){
        res.status(400).send({message:err.details[0].message})
        let errmsg = err.details.map((el)=>el.message).join(", ");
    }
    next();
}

const error=(err, req, res, next)=>{}

module.exports={validateUser}