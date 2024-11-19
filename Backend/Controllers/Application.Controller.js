import { Application } from "../Models/Application.Model.js";
import { Job } from "../Models/Job.Model.js";

export const applyJob = async (req, res) => {
    try {
        const userId = req.id;
        const jobId = req.params.id;
        if (!jobId) {
            return res.status(400).json({
                message: "Opps! Job ID is Required.",
                success: false
            })
        };
        // check if the user has already applied for the job
        const existingApplication = await Application.findOne({ job: jobId, applicant: userId });

        if (existingApplication) {
            return res.status(400).json({
                message: "Have patience you have already applied for this job",
                success: false
            });
        }

        // check if the jobs exists
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({
                message: "No Jobs available at this moment.",
                success: false
            })
        }
        // create a new application
        const newApplication = await Application.create({
            Job:jobId,
            Applicant:userId,
        });

        job.Application.push(newApplication._id);
        await job.save();
        return res.status(201).json({
            message:"Wohooo!, Job applied successfully.",
            success:true
        })
    } catch (error) {
        console.log(`${error}, apply job issue.`);
    }
};
export const getAppliedJobs = async (req,res) => {
    try {
        const userId = req.id;
        const application = await Application.find({Applicant:userId}).sort({createdAt:-1}).populate({
            path:'Job',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'Company',
                options:{sort:{createdAt:-1}},
            }
        });
        if(!application){
            return res.status(404).json({
                message:"No Applications",
                success:false
            })
        };
        return res.status(200).json({
            application,
            success:true
        })
    } catch (error) {
        console.log(`${error}, GetAppliedJobs issue`);
    }
}
// admin dekhega kitna user ne apply kiya hai
export const getApplicants = async (req,res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path:'Application',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'Applicant'
            }
        });
        if(!job){
            return res.status(404).json({
                message:'No Applicants Available at this moment',
                success:false
            })
        };
        return res.status(200).json({
            job, 
            succees:true
        });
    } catch (error) {
        console.log(`${error}, GetApplicants issue`);
    }
}
export const updateStatus = async (req,res) => {
    try {
        const {Status} = req.body;
        const applicationId = req.params.id;
        if(!Status){
            return res.status(400).json({
                message:'Status is required',
                success:false
            })
        };

        // find the application by applicantion id
        const application = await Application.findOne({_id:applicationId});
        if(!application){
            return res.status(404).json({
                message:"No applicants at this moment",
                success:false
            })
        };

        // update the status
        application.Status = Status.toLowerCase();
        await application.save();

        return res.status(200).json({
            message:"Wohooo! Status has been changed successfully.",
            success:true
        });

    } catch (error) {
        console.log(`${error}, Update status issue.`);
    }
}