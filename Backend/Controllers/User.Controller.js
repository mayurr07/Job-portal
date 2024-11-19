import { User } from "../Models/User.Model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";

export const Register = async (req, res) => {
    try {
        const { fullName, Email, phoneNum, Password, Role } = req.body;

        if (!fullName || !Email || !phoneNum || !Password || !Role) {
            return res.status(400).json({
                message: "The required information is missing.",
                success: false
            });
        };
        const file = req.file;
        // Uncomment this part if you want to handle file uploads later
        const fileUri = getDataUri(file);
        const cloudResponse = await cloudinary.uploader.upload(fileUri.content, {
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET,
            cloud_name: process.env.CLOUD_NAME
        });
        const user = await User.findOne({ Email });
        if (user) {
            return res.status(400).json({
                message: 'User already registered with this email.',
                success: false,
            })
        }
        const hashedPassword = await bcrypt.hash(Password, 10);

        await User.create({
            fullName,
            Email,
            phoneNum,
            Password: hashedPassword,
            Role,
            Profile: {
                profilePhoto: cloudResponse.secure_url,
            }
        });

        return res.status(201).json({
            message: "Wohoooo! Account Created Successfully.",
            success: true
        });
    } catch (error) {
        console.log(`${error}, Register code issue.`);
    }
}
export const login = async (req, res) => {
    try {
        const { Email, Password, Role } = req.body;

        if (!Email || !Password || !Role) {
            return res.status(400).json({
                message: "Something is missing while loggin in",
                success: false
            });
        };
        let user = await User.findOne({ Email });
        if (!user) {
            return res.status(400).json({
                message: "Incorrect email.",
                success: false,
            })
        }
        const isPasswordMatch = await bcrypt.compare(Password, user.Password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "Incorrect password.",
                success: false,
            })
        };
        // check role is correct or not
        if (Role !== user.Role) {
            return res.status(400).json({
                message: "Account doesn't exist with current Role.",
                success: false
            })
        };

        const tokenData = {
            userId: user._id
        }
        const token = await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });

        user = {
            _id: user._id,
            fullName: user.fullName,
            Email: user.Email,
            phoneNum: user.phoneNum,
            Role: user.Role,
            Profile: user.Profile
        }

        return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpsOnly: true, sameSite: 'strict' }).json({
            message: `Welcome back, we've missed you! ${user.fullName}`,
            user,
            success: true
        })
    } catch (error) {
        console.log(`${error}, issue with login code`);
    }
}
export const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0, httpOnly: true, sameSite: 'strict' }).json({
            message: "Logged out, see you again soon!.",
            success: true
        })
    } catch (error) {
        console.log(`${error}, Logout code issue`);
    }
}
export const updateProfile = async (req, res) => {
    try {
        const { fullName, Email, phoneNum, bio, skills } = req.body;
        // console.log(fullName, Email, phoneNum, bio, skills)

        const file = req.file;
        const userId = req.id; // middleware authentication
        let user = await User.findById(userId);
        // console.log(file);

        // cloudinary ayega idhar

        const fileUri = getDataUri(file);
        const cloudResponse = await cloudinary.uploader.upload(fileUri.content, {
            format: "pdf",
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET,
            cloud_name: process.env.CLOUD_NAME
        });
        // Save URL and original name

        let skillsArray;
        if (skills) {
            skillsArray = skills.split(",");
        }

        if (!user) {
            return res.status(400).json({
                message: "Oops! It looks like there's no account associated with that information.",
                success: false
            })
        }
        // updating data
        if (fullName) user.fullName = fullName
        if (Email) user.Email = Email
        if (phoneNum) user.phoneNum = phoneNum
        if (bio) user.Profile.bio = bio
        if (skills) user.Profile.skills = skillsArray

        // resume comes later here...
        if (cloudResponse) {
            user.Profile.resume = cloudResponse.secure_url // save the cloudinary url
            user.Profile.resumeOriginalName = file.originalname // Save the original file name
        }
        await user.save();

        user = {
            _id: user._id,
            fullName: user.fullName,
            email: user.Email,
            phoneNumber: user.phoneNum,
            role: user.Role,
            profile: user.Profile
        }

        return res.status(200).json({
            message: "Wohoo! Your profile has been updated successfully.",
            user,
            success: true
        })
    } catch (error) {
        console.log(`${error}, Update Profile section issue.`);
    }
}

export const getJobSeekers = async (req, res) => {
    try {
        // Find all users with Role set to "job seeker" or "student"
        const jobSeekers = await User.find({ Role: { $in: ["Student"] } });

        return res.status(200).json({
            message: "Job seekers retrieved successfully.",
            jobSeekers,
            success: true
        });
    } catch (error) {
        console.log(`${error}, Error fetching job seekers.`);
        return res.status(500).json({
            message: "An error occurred while fetching job seekers.",
            success: false
        });
    }
};