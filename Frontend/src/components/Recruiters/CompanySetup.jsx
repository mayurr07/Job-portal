import React, { useEffect, useState } from 'react'
import Navbar from '../ui/shared/Navbar'
import { Button } from '../ui/button'
import { ArrowLeft } from 'lucide-react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import axios from 'axios'
import { COM_API_END_POINT } from '@/utils/constants'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { useSelector } from 'react-redux'
import useGetCompanyById from '@/hooks/useGetCompanyById'
// import { headers } from 'headers'

const CompanySetup = () => {
    const params = useParams(); // to get id of company
    useGetCompanyById(params.id);
    const [input, setInput] = useState({
        companyName: "",
        Description: "",
        Website: "",
        Location: "",
        file: null
    });

    const {singleCompany} = useSelector(store=>store.company)
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };
    const changeFileHandler = (e) => {
        const file = e.target.files?.[0];
        setInput({ ...input, file });
    }



    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        // console.log(input)
        formData.append("companyName", input.companyName);
        formData.append("Description", input.Description);
        formData.append("Website", input.Website);
        formData.append("Location", input.Location);
        if (input.file) {
            formData.append("file", input.file);
        }
        try {
            setLoading(true);
            const res = await axios.put(`${COM_API_END_POINT}/update/${params.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            });
            if (res.data.success) {
                toast.success(res.data.message);
                navigate("/admin/company")
            }
        } catch (error) {
            console.log(`${error}, submitHandler issue for company setup`);
            toast.error(error.response.data.message);
        }
        finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        setInput({
            companyName: singleCompany.companyName || "",
            Description: singleCompany.Description || "",
            Website: singleCompany.Website || "",
            Location: singleCompany.Location || "",
            file: singleCompany.file || null
        })
    },[singleCompany])
    return (
        <div>
            <Navbar />
            <div className='max-w-xl mx-auto my-10'>
                <div className="bg-white shadow-lg rounded-lg p-8"> {/* Add rounded borders, background color, and shadow here */}
                    <form onSubmit={submitHandler}>
                        <div className='flex items-center justify-between mb-6'>
                            <Button onClick={() => navigate("/admin/company")} className='flex items-center gap-2 font-medium bg-orange-100 custom'>
                                <ArrowLeft />
                                <span>Back</span>
                            </Button>
                            <h1 className='font-semibold text-xl'>Company Setup</h1>
                        </div>
                        <div className='grid grid-cols-2 gap-4 mb-5 items-center'>
                            <div>
                                <Label>Company Name</Label>
                                <Input
                                    type="text"
                                    name="companyName"
                                    value={input.companyName}
                                    onChange={changeEventHandler}
                                    className='border rounded-md px-2 py-1'
                                />
                            </div>
                            <div>
                                <Label>Website</Label>
                                <Input
                                    type="text"
                                    name="Website"
                                    value={input.Website}
                                    onChange={changeEventHandler}
                                    className='border rounded-md px-2 py-1'
                                />
                            </div>
                            <div>
                                <Label>Location</Label>
                                <Input
                                    type="text"
                                    name="Location"
                                    value={input.Location}
                                    onChange={changeEventHandler}
                                    className='border rounded-md px-2 py-1'
                                />
                            </div>
                            <div className=''>
                                <Label>Logo</Label>
                                <Input
                                    type="file"
                                    aaccept="image/*"
                                    onChange={changeFileHandler}
                                    className='border rounded-md px-2 py-2'
                                />
                            </div>
                        </div>
                        <div className='mb-5'>
                            <Label>Description</Label>
                            <Textarea
                                name="Description"
                                value={input.Description}
                                onChange={changeEventHandler}
                                className="border rounded-md px-2 py-1"
                                placeholder="Enter the description here"
                            />
                        </div>
                        {loading ? (
                            <Button className='w-full bg-slate-100 py-2 rounded-md custom'>
                                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                                Loading!
                            </Button>
                        ) : (
                            <Button type='submit' className='w-full bg-slate-100 py-2 rounded-md custom'>
                                Update
                            </Button>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CompanySetup;
