import { useNavigate } from 'react-router-dom';
import React from 'react';
import heroimg from '../components/images/homeimg1.jpeg';
import { motion } from 'framer-motion';

const HeroSection = () => {
    const navigate = useNavigate();

    const headingVariants = {
        hidden: { opacity: 0, y: 50 },  // Initial state
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1, // How long the animation takes
                ease: [0.42, 0, 0.45, 1],  // Smooth transition (ease-in-out)
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={headingVariants}
            className="bg-gray-50 w-full overflow-hidden mt-10"> {/* Ensures no horizontal scroll */}
            <section className="pt-12 pb-12 sm:pb-16 lg:pt-8 mt-10">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
                        {/* Text Section */}
                        <div className="px-4 lg:px-0"> {/* Added padding for mobile responsiveness */}
                            <div className="text-center lg:text-left">
                                <motion.h1
                                    initial="hidden"
                                    animate="visible"
                                    variants={headingVariants}
                                    className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">
                                    <span className='text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-orange-400'>
                                        Access a Diverse Portfolio of Job Openings Tailored to Your Skills
                                    </span>
                                </motion.h1>
                                <motion.p
                                    initial="hidden"
                                    animate="visible"
                                    variants={headingVariants}
                                    className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">
                                    Discover job openings designed to align with your skills, offering endless career growth possibilities.
                                </motion.p>

                                {/* Email Form */}
                                <motion.form
                                    initial="hidden"
                                    animate="visible"
                                    variants={headingVariants}
                                    action="#" method="POST" className="mt-8 sm:mt-10">
                                    <div className="relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
                                        <input
                                            type="email"
                                            placeholder="Enter email address"
                                            className="block w-full px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent"
                                            required
                                        />
                                        <motion.div whileHover={{ scale: 1.2 }} className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                                            <button type="submit" onClick={() => navigate("/SignUp")} className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-orange-600 rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-orange-900">
                                                Apply Now
                                            </button>
                                        </motion.div>
                                    </div>
                                </motion.form>
                            </div>

                            {/* Stats Section */}
                            <div className="flex flex-wrap justify-center lg:justify-start mt-10 space-x-6 sm:space-x-8">
                                <div className="flex items-center mb-4 sm:mb-0">
                                    <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">30+</p>
                                    <p className="ml-3 text-sm text-gray-900 font-pj">Years<br />of Dedicated Service</p>
                                </div>

                                <div className="hidden sm:block">
                                    <svg className="text-gray-400" width="16" height="39" viewBox="0 0 16 39" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975"></line>
                                        <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398"></line>
                                        <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584"></line>
                                        <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584"></line>
                                        <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584"></line>
                                    </svg>
                                </div>

                                <div className="flex items-center">
                                    <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">$1M+</p>
                                    <p className="ml-3 text-sm text-gray-900 font-pj">Transaction<br />Completed</p>
                                </div>
                            </div>
                        </div>

                        {/* Image Section */}
                        <motion.div
                            animate={{ y: [0, 20, 0] }} // Up and down movement
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                repeat: Infinity,
                            }}
                        >
                            <img className='w-full h-auto object-cover customimg' src={heroimg} alt='HeroSection' />
                        </motion.div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}

export default HeroSection;
