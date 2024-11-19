import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Requirement: [{
        type: String
    }],
    Salary: {
        type: Number,
        required: true
    },
    Experience:{
        type:Number,
        required:true,
    },
    Location: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        required: true
    },
    Position: {
        type: Number,
        required: true
    },
    Company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    Application: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Application',
        }
    ]
},{timestamps:true});
export const Job = mongoose.model("Job", jobSchema);