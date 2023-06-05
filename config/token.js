const jwt = require("jsonwebtoken")

const encode = async(payload)=>{
    return jwt.sign(payload,"kaifjwt",{
        expiresIn:"1d"
    })
};

const decode = async (token) => {
    return jwt.decode(token, "kaifjwt");
  };

    module.exports ={
        encode,
        decode
    }