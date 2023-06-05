const mongoose = require("mongoose")

const adminSchema = new mongoose.Schema({

    employeeId :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Employee",
    
    },
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },

},{timestamps:true,strict:false})

const adminModel = mongoose.model("Admin",adminSchema)
module.exports=adminModel;