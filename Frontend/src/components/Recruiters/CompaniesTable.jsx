import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import logo from '../../assets/ujlogo.png'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'

const CompaniesTable = () => {
  const { companies = [], searchCompany } = useSelector(store => store.company);
  const [filterCompany, setFilterCompany] = useState(companies);
  const navigate = useNavigate()
  useEffect(() => {
    const filteredCompany = companies.length >= 0 && companies.filter((company)=>{
      if(!searchCompany){
        return true;
      };
      return company?.companyName?.toLowerCase().includes(searchCompany.toLowerCase());
    });
    setFilterCompany(filteredCompany);
  },[companies, searchCompany])
  return (
    <div className='overflow-x-auto'>
      <Table className='border border-orange-200 min-w-full'>
        <TableCaption>List of your registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='px-2 py-4'>Logo</TableHead>
            <TableHead className='px-2 py-4'>Name</TableHead>
            <TableHead className='px-2 py-4'>Date</TableHead>
            <TableHead className='px-2 py-4'>Action</TableHead>
            <TableHead className='px-5 py-4'>Post Jobs</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            filterCompany?.map((company) => (
                
                  <TableRow>
                    <TableCell className='px-2 py-4'>
                      <Avatar>
                        <AvatarImage src={company.Logo} alt="Company Logo" />
                      </Avatar>
                    </TableCell>
                    <TableCell className='px-2 py-4'>{company.companyName}</TableCell>
                    <TableCell className='px-2 py-4'>{company.createdAt.split("T")[0]}</TableCell>
                    <TableCell className='px-2 py-4'>
                      <Popover>
                        <PopoverTrigger>
                          <MoreHorizontal className='cursor-pointer' />
                        </PopoverTrigger>
                        <PopoverContent className='w-32 bg-white cursor-pointer hover:bg-orange-50 hover:text-orange-500'>
                          <div onClick = {() => navigate(`/admin/company/${company._id}`) } className='flex items-center gap-2 px-2 py-1 '>
                            <Edit2 className='w-4' />
                            <span>Edit</span>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </TableCell>
                    <TableCell className=''><Button onClick={() => navigate(`/admin/jobs`)} className='custom text-orange-400 border border-slate-200'>Post Jobs</Button></TableCell>
                  </TableRow>
              )
            )
          }
        </TableBody>
      </Table>
    </div>
  )
}

export default CompaniesTable;
