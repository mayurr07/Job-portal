import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { toast } from 'sonner'
import { APP_API_END_POINT } from '@/utils/constants'
import axios from 'axios'

const shortListing = ["Accepted", "Rejected"]
const ApplicantsTable = () => {
  const { Applicants } = useSelector(store => store.application);
  const statusHandler = async (Status, id) => {
    axios.defaults.withCredentials = true;
    try {
      const res = await axios.post(`${APP_API_END_POINT}/status/${id}/update`, {Status});
      
      if(res.data.success){
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(`${error}, Applicants page status handler issue`)
    }
  }

  return (
    <div className="overflow-x-auto">
      <Table className="min-w-full">
        <TableCaption>List of your recent applied User's</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-sm md:text-base">Full Name</TableHead>
            <TableHead className="text-sm md:text-base">Email</TableHead>
            <TableHead className="text-sm md:text-base">Resume</TableHead>
            <TableHead className="text-sm md:text-base">Date</TableHead>
            <TableHead className="text-sm md:text-base">Contact</TableHead>
            <TableHead className="text-sm md:text-base">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            Applicants && Applicants.Application.map((item) => (
              <TableRow key={item}>
                <TableCell className="text-sm md:text-base">{item?.Applicant?.fullName}</TableCell>
                <TableCell className="text-sm md:text-base">{item?.Applicant?.Email}</TableCell>
                <TableCell className="text-sm md:text-base">
                  {
                    item.Applicant?.Profile?.resume ? <a href={item?.Applicant?.Profile?.resume} target='_blank' rel="noopener noreferrer" className='text-orange-500 hover:text-orange-700'>
                    {item?.Applicant?.Profile?.resumeOriginalName}
                  </a>
                  :
                  <span>N/A</span>
                  }
                </TableCell>
                <TableCell className="text-sm md:text-base">{item?.Applicant?.createdAt.split("T")[0]}</TableCell>
                <TableCell className="text-sm md:text-base">{item?.Applicant?.phoneNum}</TableCell>
                <TableCell className="text-sm md:text-base"> 
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal className="cursor-pointer" />
                    </PopoverTrigger>
                    <PopoverContent className='w-32 bg-white cursor-pointer'>
                      {
                        shortListing.map((Status, index) => (
                          <div onClick={() => statusHandler(Status, item?._id)} key={`${Status}-${index}`} className='hover:text-orange-400'>
                            <span>{Status}</span>
                          </div>
                        ))
                      }
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}

export default ApplicantsTable;
