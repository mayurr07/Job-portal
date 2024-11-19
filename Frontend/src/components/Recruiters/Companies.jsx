import React, { useEffect, useState } from 'react'
import Navbar from '../ui/shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'
import useGetAllCompany from '@/hooks/useGetAllCompany'
import { useDispatch } from 'react-redux'
import { setSearchCompany } from '@/redux/companySlice'

const Companies = () => {
    useGetAllCompany();
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSearchCompany(input));
    }, [input]);
    return (
        <div>
            <Navbar />
            <div className='max-w-6xl mx-auto my-5 px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col sm:flex-row items-center justify-between my-5 gap-4'>
                    <Input
                        className='w-full sm:w-auto'
                        placeholder="Filter by Name"
                        onChange = {(e) => setInput(e.target.value)}
                    />
                    <Button onClick={() => navigate("/admin/company/create")} className='custom bg-orange-50 w-full sm:w-auto'>
                        New Company
                    </Button>
                </div>
                <CompaniesTable />
            </div>
        </div>
    )
}

export default Companies;
