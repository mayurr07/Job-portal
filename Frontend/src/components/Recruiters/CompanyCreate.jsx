import React, { useState } from 'react'
import Navbar from '../ui/shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { COM_API_END_POINT} from '@/utils/constants'
import { toast } from 'sonner'
import { useDispatch } from 'react-redux'
import { setSingleCompany } from '@/redux/companySlice'

const CompanyCreate = () => {
    const navigate = useNavigate();
    const [companyName, setCompanyName] = useState();
    const dispatch = useDispatch();
    const RegNewCompany = async() => {
        try {
            const res = await axios.post(`${COM_API_END_POINT}/register`, {companyName}, {
                headers:{
                    'Content-Type': 'Application/json'
                },
                withCredentials:true
            });
            if(res?.data?.success){
                toast.success(res.data.message);
                dispatch(setSingleCompany(res.data.company))
                const companyId = res?.data?.company._id
                navigate(`/admin/company/${companyId}`)
            }
        } catch (error) {
            console.log(`${error}, RegNewCompany issue CompanyyCreate.jsx`)
        }
    }
    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto my-5'>
                <div className='my-10'>
                    <h1 className='text-2xl'>Provide Your Company Name</h1>
                    <p className='text-gray-500'>Let's Begin - What's the Name of Your Company? you can change it later</p>
                </div>

                <Label>Company Name</Label>
                <Input
                    type="text"
                    className='my-2 hover:border-orange-500'
                    placeholder='Company Name'
                    onChange={(e)=> setCompanyName(e.target.value)}
                />
                <div className='flex items-center gap-2 my-10'>
                    <Button variant='outline' className='custom border border-orange-300' onClick={() => navigate("/admin/company")}>Cancel</Button>
                    <Button className='custom bg-orange-50' onClick={RegNewCompany}>Continue</Button>
                </div>
            </div>
        </div>
    )
}

export default CompanyCreate