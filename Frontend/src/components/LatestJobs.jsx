import React from 'react';
import { motion } from 'framer-motion';
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const LatestJobs = () => {
    const navigate = useNavigate();
    const {allJobs} = useSelector(store=>store.job);
    // console.log(allJobs);
    const headingVariants = {
        hidden: { opacity: 0, y: 50 },  // Initial state
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1, // How long the animation takes
                ease: [0.42, 0, 0.58, 1],  // Smooth transition (ease-in-out)
            },
        },
    };
    // console.log(allJobs);

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={headingVariants}
            className='mx-auto my-20 px-4 max-w-7xl sm:px-6 lg:px-8'>
            <motion.h1
                className="text-2xl font-bold leading-tight text-gray-900 sm:text-2xl sm:leading-tight lg:leading-tight lg:text-3xl font-pj">
                <span className='text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-orange-400'>
                    Find Your Next Career Move with Our Top Job Listings
                </span>
            </motion.h1>

            {/* Responsive Grid for Latest Jobs */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-5' >
                {
                    allJobs.length<= 0 ?<span>No jobs available</span> : allJobs.slice(0, 6).map((job) => (
                        <LatestJobCards  key={job._id} job={job}/>
                    ))
                }
            </div>
        </motion.div>
    );
};

export default LatestJobs;
