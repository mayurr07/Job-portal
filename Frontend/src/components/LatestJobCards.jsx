import React from 'react';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

const LatestJobCards = ({job}) => {
  // console.log(job);
  const navigate = useNavigate();
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-600 cursor-pointer max-w-md mx-auto' onClick={()=>navigate(`/description/${job._id}`)}>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
        <div>
          <h1 className='text-lg font-semibold'>{job?.Company?.companyName || "Company Name"}</h1>
          <p className='text-gray-500'>{job?.Location || "India"}</p>
        </div>
        <div className='mt-2 md:mt-0 md:text-right'>
          <h1 className='text-lg font-semibold'>{job?.Title}</h1>
          <p className='text-gray-500'>{job?.Description}</p>
        </div>
      </div>
      <div className='flex flex-wrap items-center gap-2 mt-4'>
        <Badge className={'text-orange-500 '} variant="ghost">{job?.Position} Vacancies</Badge>
        <Badge className={'text-pink-500'} variant="ghost">{job?.jobType}</Badge>
        <Badge className={'text-red-500'} variant="ghost">{job?.Salary} LPA</Badge>
      </div>
    </div>
  );
}

export default LatestJobCards;
