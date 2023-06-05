const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({

    name:{
        type:String
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    payments:{
        type:Number
    },
    languages:{
        type:Array
    }

},{timestamps:true,strict:false})

const employeeModel = mongoose.model("Employee",employeeSchema)
module.exports =employeeModel;
