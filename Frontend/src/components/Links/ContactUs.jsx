/* eslint-disable no-unused-vars */
import { useState } from 'react'; // React Hook for handling form state
import { Button } from '../ui/button'; // Assuming you have a Button component
import { Input } from '../ui/input'; // Assuming you have an Input component
import { motion } from 'framer-motion'; // For animations
import Navbar from '../ui/shared/Navbar'; // Assuming you have Navbar component
import logo from '../../assets/contactus.jpeg'; // Path to your image

const ContactUs = () => {
    // State for form fields
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    // State for error messages
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    // State for submission status
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Basic form validation
    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.subject) newErrors.subject = 'Subject is required';
        if (!formData.message) newErrors.message = 'Message is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form before submission
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmissionStatus('');

        try {
            // Replace with your API endpoint
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
            setSubmissionStatus('Your message has been sent successfully!');
        } catch (error) {
            setSubmissionStatus('An error occurred. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <Navbar />
            <motion.div
                className="bg-white text-black w-full py-16 px-4 sm:px-6 lg:px-8 mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
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
                            <form onSubmit={handleSubmit}>
                                <div className="space-y-6">
                                    <div>
                                        <Input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        />
                                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                                    </div>
                                    <div>
                                        <Input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Your Email"
                                            className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        />
                                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                                    </div>
                                    <div>
                                        <Input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="Subject"
                                            className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        />
                                        {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
                                    </div>
                                    <div>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Your Message"
                                            className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500 h-32"
                                        />
                                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                                    </div>
                                    <div className="text-center">
                                        <Button
                                            type="submit"
                                            className="bg-orange-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-orange-600"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
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
                                ease: 'easeInOut',
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

                    {/* Submission Status */}
                    {submissionStatus && (
                        <div className="mt-6 text-center">
                            <p className={`text-lg font-semibold ${submissionStatus.includes('error') ? 'text-red-500' : 'text-green-500'}`}>
                                {submissionStatus}
                            </p>
                        </div>
                    )}

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
                            Whether you have a question or need more information, feel free to reach out. We`re happy to assist!
                        </p>

                        {/* Call or WhatsApp Buttons */}
                        <div className="flex justify-center gap-4 mt-6">
                            <a
                                href="tel:+917710870992" // Replace with your phone number
                                className="bg-green-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-600"
                            >
                                Call Us
                            </a>
                            <a
                                href="https://wa.me/7710870992" // Replace with your WhatsApp number
                                className="bg-teal-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-teal-600"
                            >
                                WhatsApp Us
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ContactUs;
