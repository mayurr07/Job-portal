import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarImage } from './ui/avatar';
import logo from "../assets/ujlogo.jpeg";
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

const Job = ({job}) => {
  const navigate = useNavigate();
  // const jobId = "ujvaljob";
  const daysAgo = (mongodbTime) =>{
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDiff = currentTime -createdAt;
    return Math.floor(timeDiff/(1000*24*60*60));
  }
  return (
    <motion.div
      className="carrd relative p-1 rounded-md my-5 sm:mx-3 md:mx-3 "
    >
      {/* Border Layer */}

      {/* Card Content */}
      <motion.div
      whileHover={{
        boxShadow: '0px 10px 30px rgba(255, 165, 0, 0.4)', // Higher shadow with more opacity
      }}
        className="relative p-4 sm:p-5 bg-white rounded-md shadow-orange-200 shadow-lg border border-orange-300">
        {/* Date and Bookmark */}
        <div className='flex items-center justify-between flex-wrap'>
          <p className='text-sm sm:text-base'>{daysAgo(job?.createdAt) == 0 || daysAgo(job?.createdAt) == 1 ? "Today" :`${daysAgo(job?.createdAt)} Days ago`}</p>
          <Button variant="outline" className='rounded-full' size="icon">
            <Bookmark />
          </Button>
        </div>

        {/* Company Info */}
        <div className='flex flex-col sm:flex-row items-center gap-2 my-4'>
          <Button className='p-4 sm:p-6' variant="outline" size="icon">
            <Avatar>
              <AvatarImage src={job?.Company?.Logo} />
            </Avatar>
          </Button>
          <div className='text-center sm:text-left'>
            <h1 className='text-sm sm:text-base font-bold'>{job?.Company?.companyName}</h1>
            <p className='text-xs sm:text-sm text-rose-600'>{job?.Location}</p>
          </div>
        </div>

        {/* Job Title and Description */}
        <div className='mt-4'>
          <h1 className='text-base sm:text-lg font-semibold my-2'>{job?.Title}</h1>
          <p className='text-xs sm:text-sm text-gray-500'>
            {job?.Description}
          </p>
        </div>

        {/* Job Details Badges */}
        <div className='flex flex-wrap items-center gap-2 mt-4'>
          <Badge className='text-orange-500 font-semibold text-xs sm:text-sm' variant="ghost">{job?.Position} Vacancy</Badge>
          <Badge className='text-pink-500 font-semibold text-xs sm:text-sm' variant="ghost">{job?.jobType}</Badge>
          <Badge className='text-red-500 font-semibold text-xs sm:text-sm' variant="ghost">{job?.Salary} LPA</Badge>
        </div>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
          <Button onClick={()=>navigate(`/description/${job?._id}`)} variant="outline" className='w-full sm:w-auto'>Details</Button>
          <Button className='bg-orange-500 w-full sm:w-auto'>Save for later</Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Job;
