import { Job } from "../Models/Job.Model.js";
import { Application } from "../Models/Application.Model.js";

// admin post krega job
export const postJob = async (req, res) => {
    try {
        const { Title, Description, Requirement, Salary, Location, jobType, Experience, Position, companyId } = req.body;
        const userId = req.id;

        if (!Title || !Description || !Requirement || !Salary || !Location || !jobType || !Experience || !Position || !companyId) {
            return res.status(400).json({
                message: "Something is missing.",
                success: false
            })
        };
        const job = await Job.create({
            Title,
            Description,
            Requirement: Requirement.split(","),
            Salary: Number(Salary),
            Location,
            jobType,
            Experience,
            Position,
            Company: companyId,
            created_by: userId
        });
        return res.status(201).json({
            message: "Wohooo!, Your job listing has been successfully posted and is now live.",
            job,
            success: true
        });
    } catch (error) {
        console.log(`${error}, There is a issue with postJob code.`);
    }
}
// student k liye
export const getAllJobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";
        const query = {
            $or: [
                { Title: { $regex: keyword, $options: "i" } },
                { Description: { $regex: keyword, $options: "i" } },
            ]
        };
        const jobs = await Job.find(query).populate({
            path: 'Company'
        }).sort({ createdAt: -1 });
        if (!jobs) {
            return res.status(404).json({
                message: "Opps! no jobs available for your requirement.",
                success: false
            })
        };
        return res.status(200).json({
            jobs,
            success: true
        })
    } catch (error) {
        console.log(`${error}, get all jobs issue`);
    }
}
// student
export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path:"Application"
        });
        if (!job) {
            return res.status(404).json({
                message: "Opps! no jobs available for your requirement.",
                success: false
            })
        };
        return res.status(200).json({ job, success: true });
    } catch (error) {
        console.log(`${error}, Getting Job by ID issue.`);
    }
}
// admin kitne job create kra hai abhi tk
export const getAdminJobs = async (req, res) => {
    try {
        const adminId = req.id;
        const jobs = await Job.find({ created_by: adminId }).populate({
            path:'Company',
            createdAt:-1
        });
        if (!jobs) {
            return res.status(404).json({
                message: "Opps! no jobs available for your requirement..",
                success: false
            })
        };
        return res.status(200).json({
            jobs,
            success: true
        })
    } catch (error) {
        console.log(`${error}, getAdminJobs issue`);
    }
}
