import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/FAQ.png";

function FAQDropdown() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "1. What are the benefits of hiring placement services?",
      answer: "Placement services help in finding qualified people for the job opening, conducting interviews and screening, negotiating between the two parties, etc.",
    },
    {
      question: "2.Does Ujval Career Centre & Job Consultancy perform all interview rounds?",
      answer: "Usually, placement services help in conducting the first few basic rounds. The main round and the HR round are held between the employer and employee. It is advisable to connect with Ujval Career Centre & Job Consultancy and learn more about the same in detail.",
    },
    {
      question: "3.How long will Ujval Career Centre & Job Consultancy take to provide me with a candidate?",
      answer: "It takes time to find the perfect match for a job opening. However, most placement services try their best to fill the openings as soon as possible. We advise you to discuss the same with Ujval Career Centre & Job Consultancy.",
    },
    {
      question: "4.Do placement services help in conducting a background check?",
      answer: "Most of the time, placement services will carry out the task of conducting a basic background check on a candidate before processing any further interview.",
    },
  ];

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-6xl mx-auto my-10">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left-side image */}
        <div className="flex-shrink-0 w-full lg:w-1/3">
          <img
            src={logo}
            alt="FAQs"
            className="rounded-lg shadow-md w-full h-full object-cover"
          />
        </div>

        {/* FAQ Content */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-3xl font-bold text-center lg:text-left mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-center lg:text-left text-sm text-gray-600 mb-8">
            In a creative workplace, employees responsibly try different
            solutions.
          </p>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-orange-400 rounded-lg shadow-md bg-white overflow-hidden"
              >
                {/* Toggle Button */}
                <button
                  onClick={() => toggleDropdown(index)}
                  className="w-full text-left p-6 font-medium text-gray-700 flex justify-between items-center"
                >
                  <span className="text-lg">{faq.question}</span>
                  <motion.span
                    initial={{ rotate: 0 }}
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ▼
                  </motion.span>
                </button>

                {/* Animated Answer */}
                <motion.div
                  initial={{ height: 0 }}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="p-6 bg-gray-50 text-gray-600">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQDropdown;
