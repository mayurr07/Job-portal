import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./Routes/User.Route.js";
import companyRoute from "./Routes/Company.Route.js";
import jobRoute from "./Routes/Job.Route.js";
import applicationRoute from "./Routes/Application.Route.js";
import path from 'path';
import contactRoutes from './Routes/contactRoutes.js';

dotenv.config({});

const app = express();

const _dirname = path.resolve();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
    origin: 'http://localhost:5174' || 'https://mumbaiujvaljobconsultancy.in',
    credentials: true
}

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;


// api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);
app.use("/api/v1", contactRoutes);

app.use(express.static(path.join(_dirname, "/Frontend/dist")));
app.get('*', (_, res) => {
    res.sendFile(path.resolve(_dirname, "Frontend", "dist", "index.html"));
})



app.listen(PORT, () => {
    connectDB();
    console.log(`Server running at port ${PORT}`);
})