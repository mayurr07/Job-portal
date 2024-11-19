import React, { useState } from 'react';
import { Home, Building, Award, CheckCircle, ShoppingBag, Settings, PieChart, Package, FileText, Monitor, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const JobCategories = () => {
    const categories = [
        { icon: <Home size={20} color="#ff8800" />, label: "Remote" },
        { icon: <Building size={20} color="#ff8800" />, label: "MNC" },
        { icon: <Award size={20} color="#ff8800" />, label: "Fortune 500" },
        { icon: <CheckCircle size={20} color="#ff8800" />, label: "Project Mgmt" },
        { icon: <ShoppingBag size={20} color="#ff8800" />, label: "Sales" },
        { icon: <Settings size={20} color="#ff8800" />, label: "Engineering" },
        { icon: <PieChart size={20} color="#ff8800" />, label: "Analytics" },
        { icon: <Package size={20} color="#ff8800" />, label: "Supply Chain" },
        { icon: <FileText size={20} color="#ff8800" />, label: "Internship" },
        { icon: <Monitor size={20} color="#ff8800" />, label: "Software & IT" },
        { icon: <GraduationCap size={20} color="#ff8800" />, label: "Fresher" },
    ];

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
            className="bg-gray-100 w-full mt-10 py-12"
        >
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold leading-tight text-gray-900">
                        Explore Job Categories
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Find jobs in various fields tailored to your interests and expertise.
                    </p>
                </div>
                
                {/* Categories Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {categories.map((category, index) => {
                        const [isHovered, setIsHovered] = useState(false); // Track hover state

                        return (
                            <motion.div
                                key={index}
                                className="flex items-center gap-2 p-4 border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer bg-white"
                                onMouseEnter={() => setIsHovered(true)} // Set hover state to true
                                onMouseLeave={() => setIsHovered(false)} // Reset hover state
                            >
                                <motion.span
                                    className="flex items-center justify-center rounded-full bg-gray-100 p-2 w-10 h-10"
                                    animate={{ rotate: isHovered ? 360 : 0 }} // Rotate based on hover state
                                    transition={{ duration: 0.5 }}
                                >
                                    {category.icon}
                                </motion.span>
                                <span className="font-medium text-sm text-gray-700">{category.label}</span>
                                <span className="ml-auto text-gray-400">{'>'}</span> {/* Arrow Icon */}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
};

export default JobCategories;
