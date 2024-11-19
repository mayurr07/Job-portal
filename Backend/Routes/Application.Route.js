import express from "express";
import isAuthenticated from "../Middlewares/isAuthenticated.js";
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from "../Controllers/Application.Controller.js";
 
const router = express.Router();

router.route("/apply/:id").get(isAuthenticated, applyJob);
router.route("/status/:id/update").post(isAuthenticated, updateStatus);
router.route("/get").get(isAuthenticated, getAppliedJobs);
router.route("/:id/Applicants").get(isAuthenticated, getApplicants);
 

export default router;

