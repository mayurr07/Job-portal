import { Link } from "react-router-dom";
import logo from "../assets/ujlogo.png";
// import logo from "../assets/logo.png"; // Assuming your logo is stored in the assets folder

const Footer = () => {
    return (
        <div className="bg-gray-900 text-white py-10">
            <footer className="max-w-7xl mx-auto">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* Logo and About Us Section - Aligned Left */}
                        <div className="text-left">
                            {/* Logo with Animation */}
                            <div className="flex justify-start mb-6">
                                <img
                                    src={logo}
                                    alt="Logo"
                                    className="h-16 w-auto hover:scale-110 transition-transform duration-300 ease-in-out"
                                />
                            </div>

                            {/* About Us */}
                            <h4 className="text-xl font-semibold mb-4 text-[#ff8800] hover:text-orange-800 transition-colors duration-300 ease-in-out inline-block relative">
                                About Us
                                <span className="block h-0.5 bg-[#ff8800] scale-x-0 hover:scale-x-100 transition-transform duration-300 ease-in-out origin-center mt-1"></span>
                            </h4>
                            <p className="text-gray-400">
                                We are dedicated to connecting job seekers with their dream jobs. Our platform ensures a seamless experience for both applicants and employers.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="text-center">
                            <h4 className="text-xl font-semibold mb-4 text-[#ff8800] hover:text-orange-800 transition-colors duration-300 ease-in-out inline-block relative">
                                Quick Links
                                <span className="block h-0.5 bg-[#ff8800] scale-x-0 hover:scale-x-100 transition-transform duration-300 ease-in-out origin-center mt-1"></span>
                            </h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out">
                                        Terms & Conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="text-center">
                            <h4 className="text-xl font-semibold mb-4 text-[#ff8800] hover:text-orange-800 transition-colors duration-300 ease-in-out inline-block relative">
                                Services
                                <span className="block h-0.5 bg-[#ff8800] scale-x-0 hover:scale-x-100 transition-transform duration-300 ease-in-out origin-center mt-1"></span>
                            </h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/jobs" className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out">
                                        Job Listings
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out">
                                        Recruiter Services
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out">
                                        Employer Dashboard
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div className="text-center">
                            <h4 className="text-xl font-semibold mb-4 text-[#ff8800] hover:text-orange-800 transition-colors duration-300 ease-in-out inline-block relative">
                                Follow Us
                                <span className="block h-0.5 bg-[#ff8800] scale-x-0 hover:scale-x-100 transition-transform duration-300 ease-in-out origin-center mt-1"></span>
                            </h4>
                            <ul className="flex justify-center space-x-4">
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out">
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out">
                                        Twitter
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out">
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out">
                                        Instagram
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Footer Bottom Section */}
                    <div className="mt-8 text-center text-gray-500 border-t border-gray-700 pt-4">
                        <p>&copy; 2024 Mumbai Ujval Job Consultancy. All rights reserved.</p>
                        <p>Made with <span className="text-red-500">&hearts;</span> in India</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
