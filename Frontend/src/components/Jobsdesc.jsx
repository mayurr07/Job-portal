import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarImage } from './ui/avatar';
import logo from "../assets/ujlogo.jpeg";
import Navbar from './ui/shared/Navbar';
import { useParams } from 'react-router-dom';
// import useGetSingleJob from '@/hooks/useGetSingleJob';
import { setSingleJob } from '@/redux/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { APP_API_END_POINT, JOB_API_END_POINT } from '@/utils/constants';
import { toast } from 'sonner';

const Jobsdesc = () => {
    // Get job ID from route parameters
    const params = useParams();
    const jobId = params.id;
    const dispatch = useDispatch();
    const { singleJob } = useSelector(store => store.job);
    const { user } = useSelector(store => store.auth);

    // Initialize state to check if user has applied
    const isInitiallyApplied = singleJob?.Application?.some(application => application.Applicant === user?._id) || false;
    const [isApplied, setIsApplied] = useState(isInitiallyApplied);

    // Function to apply for the job
    const applyJob = async () => {
        try {
            const res = await axios.get(`${APP_API_END_POINT}/apply/${jobId}`, { withCredentials: true });
            if (res.data.success) {
                setIsApplied(true); // Update local state
                const updatedSingleJob = { 
                    ...singleJob, 
                    Application: [...singleJob.Application, { Applicant: user?._id }] 
                };
                dispatch(setSingleJob(updatedSingleJob)); // Update Redux state
                toast.success(res.data.message);
            }
        } catch (error) {
            console.error("ApplyJob handler issue:", error);
            toast.error(error.response.data.message);
        }
    };

    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setSingleJob(res.data.job));
                    setIsApplied(res.data.job.Application.some(application => application.Applicant === user?._id));
                }
            } catch (error) {
                console.error("jobdescription issue, getSingleJob variable:", error);
            }
        };
        fetchSingleJob();
    }, [jobId, dispatch, user?._id]);

    return (
        <div>
            <Navbar />
            <motion.div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-orange-100 shadow-md p-6 my-8">
                {/* Job Header */}
                <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <Avatar className="h-20 w-20">
                            <AvatarImage src={logo} alt="Company Logo" />
                        </Avatar>
                        <div>
                            <h1 className="text-2xl font-semibold">{singleJob?.Title || "Company Name"}</h1>
                            <p className="text-sm text-rose-600">Location: {singleJob?.Location}</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-gray-500">Posted: {singleJob?.createdAt?.split("T")[0]}</p>
                    </div>
                </div>

                <hr className="my-4 border-gray-200" />

                {/* Job Title and Description */}
                <div className="my-4">
                    <h1 className="text-xl font-bold mb-2">{singleJob?.Title}</h1>
                    <p className="text-gray-700 text-sm sm:text-base">
                        {singleJob?.Description}
                    </p>
                </div>

                <hr className="my-4 border-gray-200" />

                {/* Job Details Badges */}
                <div className="flex flex-wrap gap-2 my-4">
                    <Badge className="text-orange-500 font-semibold text-xs sm:text-sm" variant="ghost">
                        {singleJob?.Position} Vacancy
                    </Badge>
                    <Badge className="text-pink-500 font-semibold text-xs sm:text-sm" variant="ghost">
                        {singleJob?.jobType}
                    </Badge>
                    <Badge className="text-red-500 font-semibold text-xs sm:text-sm" variant="ghost">
                        {singleJob?.Salary} LPA
                    </Badge>
                </div>

                <hr className="my-4 border-gray-200" />

                {/* Responsibilities */}
                {/* <div className="my-6">
                    <h2 className="text-lg font-semibold mb-3">Responsibilities</h2>
                    <p className="text-sm text-gray-700">Responsibility 1</p>
                    <p className="text-sm text-gray-700">Responsibility 2</p>
                    <p className="text-sm text-gray-700">Responsibility 3</p>
                </div> */}

                <hr className="my-4 border-gray-200" />

                {/* Requirements */}
                <div className="my-6">
                <h2 className="text-lg font-semibold mb-3">Requirments</h2>
                    {singleJob?.Requirement?.map((req, index) => (
                        <p key={index} className="text-sm text-gray-700">
                            {req}
                        </p>
                    ))}
                </div>

                <hr className="my-4 border-gray-200" />

                {/* Total Applications */}
                <div className="my-6">
                    <h2 className="text-lg font-semibold mb-3">Total Applications</h2>
                    <p className="text-sm text-gray-700">
                        {singleJob?.Application?.length || 0} {singleJob?.Application?.length === 1 ? 'application' : 'applications'}
                    </p>
                </div>

                <hr className="my-4 border-gray-200" />

                {/* Apply Button */}
                <div className="flex justify-center sm:justify-end mt-8">
                    <Button
                        onClick={isApplied ? null : applyJob}
                        disabled={isApplied}
                        className={`rounded-lg ${isApplied ? 'bg-red-400 cursor-not-allowed text-white' : 'bg-[#ff8800] hover:bg-[#ff8800d2] custom1'}`}>
                        {isApplied ? 'Already Applied' : 'Apply Now'}
                    </Button>
                </div>
            </motion.div>
        </div>
    );
};

export default Jobsdesc;
