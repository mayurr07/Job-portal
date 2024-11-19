import { Company } from "../Models/Company.Model.js";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";

export const registerCompany = async (req, res) => {
    try {
        const {companyName}  = req.body;
        if (!companyName) {
            return res.status(400).json({
                message: "Company name is required.",
                success: false
            });
        }
        // console.log("companyName:", req.body.companyName);
        let company = await Company.findOne({ companyName });
        // console.log(companyName);
        if (company) {
            return res.status(400).json({
                message: "Opps! Company already register with same name.",
                success: false
            })
        };
        company = await Company.create({
            companyName,
            userId: req.id
        });

        return res.status(201).json({
            message: "Wohooo!, Thank you for registering with us.",
            company,
            success: true
        })
    } catch (error) {
        console.log(`${error}, Register Company issue.`);
    }
}
export const getCompany = async (req, res) => {
    try {
        const userId = req.id; // logged in user id
        const companies = await Company.find({ userId });
        if (!companies) {
            return res.status(404).json({
                message: "No details found.",
                success: false
            })
        }
        return res.status(200).json({
            companies,
            success:true
        })
    } catch (error) {
        console.log(`${error}, GetCompany issue`);
    }
}
// get company by id
export const getCompanyById = async (req, res) => {
    try {
        const companyId = req.params.id;
        const company = await Company.findById(companyId);
        if (!company) {
            return res.status(404).json({
                message: "Company not found.",
                success: false
            })
        }
        return res.status(200).json({
            company,
            success: true
        })
    } catch (error) {
        console.log(`${error}, GetCompanyby id issue.`);
    }
}
export const updateCompany = async (req, res) => {
    try {
        const { companyName, Description, Website, Location } = req.body;
 
        const file = req.file;
        // const fileUri = getDataUri(file);
        // const cloudResponse = await cloudinary.uploader.upload(fileUri.content, {
        //     api_key: process.env.API_KEY,
        //     api_secret: process.env.API_SECRET,
        //     cloud_name: process.env.CLOUD_NAME
        // });
        // const Logo = cloudResponse.secure_url;
 
        const updateData = { companyName, Description, Website, Location}; //define logo array from above over here!
        if (req.file) {
            const fileUri = getDataUri(req.file);
            const cloudResponse = await cloudinary.uploader.upload(fileUri.content, {
                api_key: process.env.API_KEY,
                api_secret: process.env.API_SECRET,
                cloud_name: process.env.CLOUD_NAME
            });
            updateData.Logo = cloudResponse.secure_url; // Only set Logo if a new file is uploaded
        }

        const company = await Company.findByIdAndUpdate(req.params.id, updateData, { new: true });

        if (!company) {
            return res.status(404).json({
                message: "No details found.",
                success: false
            })
        }
        return res.status(200).json({
            message:"Information updated successfully.",
            success:true
        })

    } catch (error) {
        console.log(`${error}, [Update Company issue.]`);
    }
}