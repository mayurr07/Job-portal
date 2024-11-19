import React, { useEffect, useState } from 'react'
import Navbar from '../ui/shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import RecJobsTable from './RecJobsTable'
import useGetAllRecJobs from '@/hooks/useGetAllRecJobs'
import { setSearchRecJob } from '@/redux/jobSlice'

const RecJobs = () => {
    useGetAllRecJobs();
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSearchRecJob(input));
    }, [input]);
    return (
        <div>
            <Navbar />
            <div className='max-w-6xl mx-auto my-5 px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col sm:flex-row items-center justify-between my-5 gap-4'>
                    <Input
                        className='w-full sm:w-auto focus-visible:ring-orange-500'
                        placeholder="Filter by Name or Role"
                        onChange = {(e) => setInput(e.target.value)}
                    />
                    <Button onClick={() => navigate("/admin/jobs/create")} className='custom bg-orange-50 w-full sm:w-auto'>
                        Post New Job
                    </Button>
                </div>
                <RecJobsTable/>
            </div>
        </div>
    )
}

export default RecJobs;
