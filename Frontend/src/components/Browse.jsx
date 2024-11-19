import React, { useEffect } from 'react'
import Navbar from './ui/shared/Navbar'
import Job from './Job'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'
import useGetAllJobs from '@/hooks/useGetAllJobs'



// const jobs = [1,2,3,4,5,6,7]

const Browse = () => {
    // useGetAllJobs();
    const {allJobs} = useSelector(store=>store.job);
    // console.log(allJobs)
    const dispatch = useDispatch();
    useEffect(() => {
        return () => {
            dispatch(setSearchedQuery(""));
        }
    },[])
  return (
    <div className=''>
        <Navbar/>
        <div className='mt-10 max-w-7xl mx-auto my-10'>
            <h1 className='mt-10'>Search Results ({allJobs.length})</h1>
            <div className='grid grid-cols-2 gap-4'>
            {
                allJobs.map((job)=>{
                    return(
                        <Job key={job?._id} job={job}/>
                    )
                })
            }
            </div>
        </div>
    </div>
  )
}

export default Browse