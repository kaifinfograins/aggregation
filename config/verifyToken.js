
const jwt = require("jsonwebtoken")
const key ="kaifjwt"
const {decode} =require("../config/token")

const verifyToken = async (req,res)=>{
    const {
        headers: { authorization },
    } = req;
    
    const token = authorization.split(" ")[1]; 
    await decode(token);
    
    jwt.verify(token,key,(err,authdata)=>{
        if(err){
            return res.json({message:"invalid token!"})
        }else{
            return res.json({
                message:"token passed",
                authdata
            })
        }
    })
}

module.exports =verifyToken;
