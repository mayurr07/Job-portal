import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    companyName:{
        type:String,
        required:true,
        unique:true
    },
    Description:{
        type:String, 
    },
    Website:{
        type:String 
    },
    Location:{
        type:String 
    },
    Logo:{
        type:String // URL to company logo
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
},{timestamps:true})
export const Company = mongoose.model("Company", companySchema);