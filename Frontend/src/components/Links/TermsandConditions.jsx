// import React from 'react';
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Navbar from "../ui/shared/Navbar";
import termsImage from "../../assets/TermsandConditions.png"; // Replace with your terms and conditions image path
// import { Link } from "lucide-react";

const TermsAndConditions = () => {
  return (
    <div>
      <Navbar />
      <motion.div className="bg-white text-black w-full py-16 px-4 sm:px-6 lg:px-8 mt-10">
        <div className="max-w-7xl mx-auto bg-white shadow-lg shadow-orange-200 rounded-lg p-8">
          {/* Terms and Conditions Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900">
              Terms and Conditions
            </h1>
            <p className="mt-2 text-lg text-gray-700">
              Please review our terms and conditions to understand our policies.
            </p>
          </div>

          {/* Terms Section with Image on Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="flex justify-center lg:justify-start"
            >
              <img
                className="w-full h-auto max-w-md object-cover rounded-2xl shadow-2xl"
                src={termsImage}
                alt="Terms and Conditions"
              />
            </motion.div>

            {/* Text Section */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Overview
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Welcome to Ujval Job Consultancy. By accessing or using our
                services, you agree to comply with the following terms and
                conditions. Please read them carefully.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Usage of Services
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Users must ensure that the information provided during
                registration is accurate and up-to-date. Unauthorized use of
                another user`s account is strictly prohibited.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Responsibilities
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Employers are responsible for ensuring job postings comply with
                legal and ethical standards. Job seekers must adhere to
                professional conduct when applying for opportunities.
              </p>
            </div>
          </div>

          {/* Key Points Section */}
          <div className="text-center mt-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Key Points
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className="p-6 bg-orange-200 rounded-lg shadow-lg"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Privacy Policy
                </h4>
                <p className="text-gray-700">
                  We prioritize the protection of your personal data and adhere
                  to strict privacy policies.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className="p-6 bg-orange-200 rounded-lg shadow-lg"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Prohibited Activities
                </h4>
                <p className="text-gray-700">
                  Any activity that violates applicable laws, including spamming
                  or misrepresentation, is prohibited.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className="p-6 bg-orange-200 rounded-lg shadow-lg"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Termination
                </h4>
                <p className="text-gray-700">
                  We reserve the right to terminate accounts or restrict access
                  for any violations of our terms.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              Have Questions?
            </h4>
            <p className="text-lg text-gray-700 mb-6">
              If you have any concerns about our terms, please feel free to
              contact us for clarification.
            </p>

            {/* <Link to="/contact"> */}
              <Button className="bg-orange-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-orange-600">
                Contact us
              </Button>
            {/* </Link> */}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TermsAndConditions;
