import express from "express";
import { login, logout, Register, updateProfile } from "../Controllers/User.Controller.js";
import isAuthenticated from "../Middlewares/isAuthenticated.js";
import { singleUpload } from "../Middlewares/multer.js";
 
const router = express.Router();

router.route("/Register").post(singleUpload,Register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated,singleUpload,updateProfile);

export default router;

