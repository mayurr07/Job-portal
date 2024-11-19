import React from 'react';
import { Button } from '../ui/button'; // Assuming you have Button component from ShadCN
import { Input } from '../ui/input';   // Assuming you have Input component from ShadCN
import { motion } from 'framer-motion';
import Navbar from '../ui/shared/Navbar';
import logo from '../../assets/contactus.jpeg'

const ContactUs = () => {
    return (
        <div>
            <Navbar />
            <motion.div
                className="bg-white text-black w-full py-16 px-4 sm:px-6 lg:px-8 mt-10"
            >
                <div className="max-w-7xl mx-auto bg-white shadow-lg shadow-orange-200 rounded-lg p-8">
                    {/* Contact Us Title */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
                        <p className="mt-2 text-lg text-gray-700">
                            Get in touch with Ujval Job Consultancy. We’re here to assist you.
                        </p>
                    </div>

                    {/* Contact Us Form Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Contact Form */}
                        <div>
                            <form>
                                <div className="space-y-6">
                                    <div>
                                        <Input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            type="email"
                                            name="email"
                                            placeholder="Your Email"
                                            className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            type="text"
                                            name="subject"
                                            placeholder="Subject"
                                            className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            name="message"
                                            placeholder="Your Message"
                                            className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500 h-32"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <Button className="bg-orange-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-orange-600">
                                            Send Message
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* Image Section (Optional) */}
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
                                src={logo} // Replace with your desired image
                                alt="Contact Us"
                            />
                        </motion.div>
                    </div>

                    {/* Why Contact Us Section */}
                    <div className="text-center mt-12">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Why Contact Us?</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="p-6 bg-orange-200 rounded-lg shadow-lg">
                                <h4 className="text-lg font-semibold text-gray-900 mb-3">Get Support</h4>
                                <p className="text-gray-700">
                                    Our team is ready to assist you with any inquiries or support needs you may have.
                                </p>
                            </div>
                            <div className="p-6 bg-orange-200 rounded-lg shadow-lg">
                                <h4 className="text-lg font-semibold text-gray-900 mb-3">Consultation</h4>
                                <p className="text-gray-700">
                                    We offer personalized career counseling, helping you make the right decisions.
                                </p>
                            </div>
                            <div className="p-6 bg-orange-200 rounded-lg shadow-lg">
                                <h4 className="text-lg font-semibold text-gray-900 mb-3">Job Placement</h4>
                                <p className="text-gray-700">
                                    We’re here to help you secure your dream job with our vast network of employers.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-12 text-center">
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch Today!</h4>
                        <p className="text-lg text-gray-700 mb-6">
                            Whether you have a question or need more information, feel free to reach out. We're happy to assist!
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ContactUs;
