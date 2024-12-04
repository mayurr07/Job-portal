import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./ui/shared/Navbar";
import HeroSection from "./HeroSection";
import CategoryCarousal from "./CategoryCarousal.jsx";
import LatestJobs from "./LatestJobs";
import SearchJob from "./SearchJob";
import JobCategories from "./JobCategories";
import Footer from "./Footer";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HowItWorks from "./HowitWorks";
import JobDetails from "./JobDetails";
import FAQDropdown from "./FAQDropdown";

const Home = () => {
  const [scrollTop, setScrollTop] = useState(false); // State to track scroll position
  useGetAllJobs();
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    // Scroll event listener to check if user has scrolled to the top
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setScrollTop(true); // User is at the top of the page
      } else {
        setScrollTop(false); // User has scrolled down
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trigger AOS refresh when scroll position changes
  useEffect(() => {
    AOS.refresh();
  }, [scrollTop]); // When scrollTop changes, AOS will refresh

  // Redirect recruiter user to admin page
  useEffect(() => {
    if (user?.Role === "Recruiter") {
      navigate("/admin/company");
    }
  }, []);

  return (
    <div>
      <Navbar />
      {!user && (
        <>
          <div
            data-aos={scrollTop ? "fade-left" : "fade-up"}
            data-aos-delay="200"
          >
            <HeroSection />
          </div>
          <div
            data-aos={scrollTop ? "fade-right" : "fade-up"}
            data-aos-delay="400"
          >
            <CategoryCarousal />
          </div>
          <div
            data-aos={scrollTop ? "fade-left" : "fade-up"}
            data-aos-delay="600"
          >
            <SearchJob />
          </div>
          <div
            data-aos={scrollTop ? "fade-left" : "fade-up"}
            data-aos-delay="200"
          >
            <FAQDropdown />
          </div>
          <div
            data-aos={scrollTop ? "fade-left" : "fade-up"}
            data-aos-delay="200"
          >
            <HowItWorks />
          </div>
          <div
            data-aos={scrollTop ? "fade-left" : "fade-up"}
            data-aos-delay="200"
          >
            <JobDetails />
          </div>
          <div
            data-aos={scrollTop ? "fade-right" : "fade-up"}
            data-aos-delay="800"
          >
            <JobCategories />
          </div>
        </>
      )}
      {user && (
        <>
          <div
            data-aos={scrollTop ? "fade-left" : "fade-up"}
            data-aos-delay="200"
          >
            <SearchJob />
          </div>
          <div
            data-aos={scrollTop ? "fade-left" : "fade-up"}
            data-aos-delay="200"
          >
            <FAQDropdown />
          </div>
          <div
            data-aos={scrollTop ? "fade-left" : "fade-up"}
            data-aos-delay="200"
          >
            <HowItWorks />
          </div>
          <div
            data-aos={scrollTop ? "fade-left" : "fade-up"}
            data-aos-delay="200"
          >
            <JobDetails />
          </div>
          <div
            data-aos={scrollTop ? "fade-right" : "fade-up"}
            data-aos-delay="400"
          >
            <JobCategories />
          </div>
          <div
            data-aos={scrollTop ? "fade-left" : "fade-up"}
            data-aos-delay="600"
          >
            <LatestJobs />
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Home;

// // import React, { useEffect } from 'react'
// import Navbar from './ui/shared/Navbar'
// import HeroSection from './HeroSection'
// import CategoryCarousal from './CategoryCarousal.jsx'
// import LatestJobs from './LatestJobs'
// import SearchJob from './SearchJob'
// import JobCategories from './JobCategories'
// import Footer from './Footer'
// import useGetAllJobs from '@/hooks/useGetAllJobs'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { useEffect } from 'react'
// // import FeaturedCompanies from './FeaturedCom'

// const Home = () => {
//   useGetAllJobs();
//   const { user } = useSelector(store => store.auth);
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (user?.Role == 'Recruiter') {
//       navigate("/admin/company")
//     }
//   }, []);
//   return (
//     <div>
//       <Navbar />
//       {
//         !user && (
//           <>
//             <HeroSection />
//             <CategoryCarousal />
//             <SearchJob />
//             <JobCategories />

//           </>
//         )
//       }
//       {/* <FeaturedCompanies/> */}
//       {
//         user && (
//           <>
//             <SearchJob />
//             <JobCategories />
//             <LatestJobs />

//           </>
//         )
//       }
//       <Footer />
//     </div>
//   )
// }

// export default Home
