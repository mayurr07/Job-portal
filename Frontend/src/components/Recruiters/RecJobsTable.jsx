import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import logo from '../../assets/ujlogo.png'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'

const RecJobsTable = () => {
    const { AllRecJobs, searchRecJob } = useSelector(store => store.job);
    const [filterRecJobs, setFilterRecJobs] = useState(AllRecJobs);
    const navigate = useNavigate()
    useEffect(() => {
        const filteredJob = AllRecJobs.length >= 0 && AllRecJobs.filter((job) => {
            if (!searchRecJob) {
                return true;
            };
            return job?.Title?.toLowerCase().includes(searchRecJob.toLowerCase()) || job?.Company?.companyName.toLowerCase().includes(searchRecJob);
        });
        setFilterRecJobs(filteredJob);
    }, [AllRecJobs, searchRecJob])
    return (
        <div className='overflow-x-auto'>
            <Table className='border border-orange-200 min-w-full'>
                <TableCaption>List of your recent Posted Jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className='px-2 py-4'>Company Name</TableHead>
                        <TableHead className='px-2 py-4'>Role</TableHead>
                        <TableHead className='px-2 py-4'>Date</TableHead>
                        <TableHead className='px-2 py-4'>Action</TableHead>
                        <TableHead className='px-7 py-4'>Applicants</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        filterRecJobs?.map((job) => (

                            <TableRow>
                                <TableCell className='px-4 py-4'>{job?.Company?.companyName}</TableCell>
                                <TableCell className='px-2 py-4'>{job?.Title}</TableCell>
                                <TableCell className='px-2 py-4'>{job.createdAt.split("T")[0]}</TableCell>
                                <TableCell className='px-2 py-4'>
                                    <Popover>
                                        <PopoverTrigger>
                                            <MoreHorizontal className='cursor-pointer' />
                                        </PopoverTrigger>
                                        <PopoverContent className='w-32 bg-white cursor-pointer '>
                                            <div onClick={() => navigate(`/admin/company/${job._id}`)} className='flex items-center gap-2 px-2 py-1 hover:text-orange-500'>
                                                <Edit2 className='w-4 h-4' />
                                                <span>Edit</span>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                                <TableCell><Button onClick={() => navigate(`/admin/jobs/${job._id}/applicants`)} className='custom text-orange-300 border border-slate-200'>Applicants</Button></TableCell>
                            </TableRow>
                        )
                        )
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default RecJobsTable;
