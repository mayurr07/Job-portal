import React from 'react';
import Navbar from './ui/shared/Navbar';
import FilterCard from './FilterCard';
import Job from './Job';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

// const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Jobs = () => {
    const{allJobs} = useSelector(store=>store.job);
    const headingVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: [0.42, 0, 0.58, 1] },
        },
    };
    return (
        <div className=''>
            <Navbar />
            <motion.div
            initial="hidden"
            animate="visible"
            variants={headingVariants}
             className='max-w-7xl mx-auto mt-20 overflow-hidden'>
                {/* Wrapper for FilterCard and Jobs List */}
                <div className='flex flex-col lg:flex-row gap-5'>
                    {/* FilterCard Section */}
                    <div className='lg:w-1/4 w-full'>
                        <FilterCard />
                    </div>

                    {/* Job Listings */}
                    {
                        allJobs.length <= 0 ? (
                            <span>No jobs available at this moment</span>
                        ) : (
                            <div className='flex-1 h-[88vh] overflow-y-auto pb-5 custom-scroll md:mx-5'>
                                {/* Responsive grid for job cards */}
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                                    {
                                        allJobs.map((job) => (
                                            <motion.div
                                            key={job?._id} className='carrd'>
                                                <Job job={job}/>
                                            </motion.div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </motion.div>
        </div>
    );
}

export default Jobs;
