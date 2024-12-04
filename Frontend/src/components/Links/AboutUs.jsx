// import React from 'react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import Navbar from '../ui/shared/Navbar';
import aboutUsImage from '../../assets/Aboutus.jpeg'; // Assuming image path

const AboutUs = () => {
    return (
        <div>
            <Navbar />
            <motion.div
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // exit={{ opacity: 0 }}
                className="bg-white text-black w-full py-16 px-4 sm:px-6 lg:px-8 mt-10"
            >
                <div className="max-w-7xl mx-auto bg-white shadow-lg shadow-orange-200 rounded-lg p-8">
                    {/* About Us Title */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
                        <p className="mt-2 text-lg text-gray-700">
                            Ujval Job Consultancy: Your Trusted Partner for Career Advancement
                        </p>
                    </div>

                    {/* About Us Section with Image on Left */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image Section */}
                        <motion.div
                            animate={{ y: [0, 20, 0] }} // Up and down movement
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                repeat: Infinity,
                            }}
                            className="flex justify-center lg:justify-start"
                        >
                            <img
                                className="w-full h-auto max-w-md object-cover rounded-2xl shadow-2xl"
                                src={aboutUsImage}
                                alt="Ujval Job Consultancy"
                            />
                        </motion.div>

                        {/* Text Section */}
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Welcome to Ujval Job Consultancy</h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Ujval Job Consultancy has been a leading name in the job placement and recruitment industry for over 30 years.
                                Founded with a vision to connect talent with opportunity, we specialize in providing expert recruitment services to
                                job seekers and employers alike.
                            </p>
                            <p className="text-lg text-gray-700 mb-6">
                                Our dedicated team works tirelessly to understand the unique needs of both candidates and companies. By focusing
                                on personalized career services, we ensure the perfect fit for both job seekers and employers, fostering lasting
                                relationships and career growth.
                            </p>
                            <p className="text-lg text-gray-700 mb-6">
                                Over the years, we have expanded our offerings, ranging from job placement assistance to career counseling,
                                resume building, and interview coaching. Our proven track record of successful placements stands as a testament
                                to our commitment to excellence.
                            </p>
                            <p className="text-lg text-gray-700 mb-6">
                                Whether you are a job seeker looking to take the next step in your career or a company in need of talented professionals,
                                Ujval Job Consultancy is here to help you achieve your goals.
                            </p>
                        </div>
                    </div>

                    {/* Why Choose Us Section */}
                    <div className="text-center mt-12">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <motion.div
                                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}
                                className="p-6 bg-orange-200 rounded-lg shadow-lg">
                                <h4 className="text-lg font-semibold text-gray-900 mb-3">Experienced & Trusted</h4>
                                <p className="text-gray-700">
                                    With over 30 years of experience in the recruitment industry, we are a trusted name in job placement and career
                                    advancement.
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}
                                className="p-6 bg-orange-200 rounded-lg shadow-lg">
                                <h4 className="text-lg font-semibold text-gray-900 mb-3">Personalized Career Services</h4>
                                <p className="text-gray-700">
                                    We offer tailored career advice, resume building, interview coaching, and job search strategies to help you stand out.
                                </p>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}
                                className="p-6 bg-orange-200 rounded-lg shadow-lg">
                                <h4 className="text-lg font-semibold text-gray-900 mb-3">Extensive Network</h4>
                                <p className="text-gray-700">
                                    Our vast network of industry connections ensures that we can connect you with top companies and opportunities.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-12 text-center">
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Join Us Today!</h4>
                        <p className="text-lg text-gray-700 mb-6">
                            Whether you`re looking for the perfect job or hiring talented professionals, Ujval Job Consultancy is your
                            reliable partner. Let us help you take the next step in your career or business.
                        </p>
                        <Button className="bg-orange-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-orange-600">
                            Get Started
                        </Button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default AboutUs;
