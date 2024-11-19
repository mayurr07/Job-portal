import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const SearchJob = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = ()=> {
        dispatch(setSearchedQuery(query))
        navigate("/browse")
    } 
    const headingVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: [0.42, 0, 0.58, 1] },
        },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={headingVariants}
            className="bg-gray-50 w-full overflow-hidden mt-10"
        >
            <section className="pt-12 pb-12 sm:pb-16 lg:pt-8 mt-10">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="text-center">
                        {/* Heading Section */}
                        <span className="mx-auto px-4 py-2 rounded-full bg-orange-100 text-[#ff8800] font-medium shadow-lg">
                            Find Jobs Perfectly Matched to Your Ambitions
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mt-4">
                            Search, Apply &<br /> Get your
                            <span className="text-[#ff8800db]"> Dream Job</span>
                        </h1>
                        <p className="text-sm md:text-base mt-2">
                            Discover the perfect job opportunities tailored to your skills and aspirations.
                        </p>
                        
                        {/* Search Form */}
                        <div className="mt-10 max-w-4xl mx-auto">
                            <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-0">
                                {/* Skills Input */}
                                <input
                                    type="text"
                                    className="w-full lg:w-1/3 flex-1 p-3 border rounded-t-lg lg:rounded-l-lg shadow-lg focus:outline-orange-500 border-none"
                                    placeholder="Enter skills / designations / companies"
                                    onChange={(e) => setQuery(e.target.value)}
                                />

                                {/* Experience Dropdown */}
                                <select
                                    className="w-full lg:w-1/6 flex-1 p-3 border-t-0 lg:border-t lg:border-none shadow-lg focus:outline-orange-500 text-[#ff8800]"
                                >
                                    <option value="" disabled selected>
                                        Select experience
                                    </option>
                                    <option value="0-1">0-1 Years</option>
                                    <option value="1-3">1-3 Years</option>
                                    <option value="3-5">3-5 Years</option>
                                    <option value="5-7">5-7 Years</option>
                                    <option value="7-10">7-10 Years</option>
                                    <option value="10+">10+ Years</option>
                                </select>

                                {/* Location Input */}
                                <input
                                    type="text"
                                    className="w-full lg:w-1/3 flex-1 p-3 border rounded-b-lg lg:rounded-r-lg lg:rounded-none shadow-lg focus:outline-orange-500 border-none"
                                    placeholder="Enter location"
                                />

                                {/* Search Button */}
                                <motion.button onClick={searchJobHandler} whileHover={{ scale: 1.2 }} className="w-full lg:w-auto bg-[#ff8800] text-white p-3 lg:ml-0 lg:rounded-r-lg rounded-lg lg:rounded-none shadow-lg">
                                    Search
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default SearchJob;
