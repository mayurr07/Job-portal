import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    Job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Job',
        required:true
    },
    Applicant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    Status:{
        type:String,
        enum:['Pending', 'Accepted', 'Rejected', 'pending', 'accepted', 'rejected'],
        default:'pending'
    }
},{timestamps:true});
export const Application  = mongoose.model("Application", applicationSchema);