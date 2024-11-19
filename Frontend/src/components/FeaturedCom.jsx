// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { ChevronLeft, ChevronRight, Star } from "lucide-react"; // Icons for carousel navigation

// const companies = [
//     {
//         name: "Cognizant",
//         rating: "3.8",
//         reviews: "45.8K+",
//         description: "Leading ITeS company with global presence.",
//         // logo: "path-to-cognizant-logo",
//         icon: <Star className="h-12 w-12 text-blue-500" />,
//     },
//     {
//         name: "Navi Technologies",
//         rating: "4.5",
//         reviews: "2K+",
//         description: "Fastest growing financial services company in India.",
//         // logo: "path-to-navi-logo",
//         icon: <Star className="h-12 w-12 text-green-500" />,
//     },
//     {
//         name: "Hitachi Energy",
//         rating: "4.1",
//         reviews: "578",
//         description: "Advancing a sustainable energy future for all.",
//         // logo: "path-to-hitachi-logo",
//         icon: <Star className="h-12 w-12 text-red-500" />,
//     },
//     {
//         name: "Standard Chartered",
//         rating: "3.8",
//         reviews: "4.2K+",
//         description: "Expand your horizons.",
//         // logo: "path-to-sc-logo",
//         icon: <Star className="h-12 w-12 text-green-400" />,
//     },
// ];

// export default function FeaturedCompaniesCarousel() {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const prevSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex === 0 ? companies.length - 1 : prevIndex - 1));
//     };

//     const nextSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex === companies.length - 1 ? 0 : prevIndex + 1));
//     };

//     return (
//         <section className="my-12 px-4 text-center mx-4">
//             <h2 className="text-2xl font-semibold mb-6">Featured companies actively hiring</h2>

//             <div className="relative w-full flex items-center justify-center cursor-pointer mx-5">
//                 {/* Carousel Wrapper */}
//                 <div className="w-full md:w-4/5 flex overflow-hidden no-scrollbar sm:scrollbar-thin sm:scrollbar-thumb-gray-400 sm:scrollbar-track-gray-100">
//                     {/* Left Arrow */}
//                     <button
//                         className="hidden sm:block absolute left-0 transform -translate-y-1/2 top-1/2 p-2 bg-gray-100 rounded-full shadow-lg hover:bg-gray-200 transition-transform duration-300 ease-in-out"
//                         onClick={prevSlide}
//                     >
//                         <ChevronLeft className="h-6 w-6" />
//                     </button>

//                     {/* Carousel Content */}
//                     <div
//                         className="flex transition-transform duration-300 ease-in-out"
//                         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//                     >
//                         {companies.map((company, index) => (
//                             <div
//                                 key={index}
//                                 className="w-full md:w-1/3 lg:w-1/4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 mx-2 flex-shrink-0"
//                             >
//                                 {/* Logo Section */}
//                                 {/* <img src={company.logo} alt={company.name} className="mx-auto h-12 mb-4" /> */}
//                                 {company.icon}
//                                 <h3 className="font-bold text-lg mt-4">{company.name}</h3>
//                                 <p className="text-yellow-500 font-semibold">
//                                     ★ {company.rating} <span className="text-gray-500">| {company.reviews} reviews</span>
//                                 </p>
//                                 <p className="text-sm text-gray-600 mt-2">{company.description}</p>
//                                 <Button className="mt-4" variant="outline">
//                                     View jobs
//                                 </Button>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Right Arrow */}
//                     <button
//                         className="hidden sm:block absolute right-0 transform -translate-y-1/2 top-1/2 p-2 bg-gray-100 rounded-full shadow-lg hover:bg-gray-200 transition-transform duration-300 ease-in-out"
//                         onClick={nextSlide}
//                     >
//                         <ChevronRight className="h-6 w-6" />
//                     </button>
//                 </div>
//             </div>

//             <Button className="mt-6" variant="secondary">
//                 View all companies
//             </Button>
//         </section>
//     );
// }
