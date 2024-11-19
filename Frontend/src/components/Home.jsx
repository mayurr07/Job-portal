import React, { useEffect } from 'react'
import Navbar from './ui/shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousal from './CategoryCarousal.jsx'
import LatestJobs from './LatestJobs'
import SearchJob from './SearchJob'
import JobCategories from './JobCategories'
import Footer from './Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import FeaturedCompanies from './FeaturedCom'


const Home = () => {
  useGetAllJobs();
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.Role == 'Recruiter') {
      navigate("/admin/company")
    }
  }, []);
  return (
    <div>
      <Navbar />
      {
        !user && (
          <>
            <HeroSection />
            <CategoryCarousal />
            <SearchJob />
            <JobCategories />

          </>
        )
      }
      {/* <FeaturedCompanies/> */}
      {
        user && (
          <>
            <SearchJob />
            <JobCategories />
            <LatestJobs />

          </>
        )
      }
      <Footer />
    </div>
  )
}

export default Home