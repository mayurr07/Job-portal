import React, { useState } from 'react'
import Navbar from '../ui/shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { useSelector } from 'react-redux'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select'
import axios from 'axios'
import { JOB_API_END_POINT } from '@/utils/constants'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { Loader2 } from 'lucide-react'

const companylenght = [];

const PostRecJob = () => {
    const [input, setInput] = useState({
        Title: "",
        Description: "",
        Requirement: "",
        Salary: "",
        Location: "",
        jobType: "",
        Experience: "",
        Position: "",
        companyId: ""

    });
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };
    const { companies } = useSelector(store => store.company);

    const selectChangeHandler = (value) => {
        const selectedCompany = companies.find((company) => company.companyName.toLowerCase() == value);
        setInput({ ...input, companyId: selectedCompany._id })
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
                headers: {
                    'Content-Type': 'Application/json'
                },
                withCredentials: true
            });
            if (res.data.success) {
                toast.success(res.data.message);
                navigate("/admin/jobs")
            }
        } catch (error) {
            console.log(`${error}, Onsubmit handler issue for postrecjob page`);
            toast.error(error.response.data.message);
        }
        finally {
            setLoading(false);
        }

    }

    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-xl mx-auto my-5'>
                <div className='shadow-orange-100 shadow-lg rounded-lg p-8'>
                    <form onSubmit={submitHandler} className=''>
                        <div className='grid grid-cols-2 gap-2 '>
                            <div>
                                <Label>Title</Label>
                                <Input
                                    type="text"
                                    name="Title"
                                    value={input.Title}
                                    onChange={changeEventHandler}
                                    placeholder="Software Developer"
                                    className='focus-visible:ring-offset-orange-100 focus-visible:ring-orange-200 my-1'
                                />
                            </div>
                            <div>
                                <Label>Requirement</Label>
                                <Input
                                    type="text"
                                    name="Requirement"
                                    value={input.Requirement}
                                    onChange={changeEventHandler}
                                    placeholder="CSS, HTML"
                                    className='focus-visible:ring-offset-orange-100 focus-visible:ring-orange-200 my-1'
                                />
                            </div>
                            <div>
                                <Label>Salary</Label>
                                <Input
                                    type="text"
                                    name="Salary"
                                    value={input.Salary}
                                    onChange={changeEventHandler}
                                    className='focus-visible:ring-offset-orange-100 focus-visible:ring-orange-200 my-1'
                                />
                            </div>
                            <div>
                                <Label>Position</Label>
                                <Input
                                    type="number"
                                    name="Position"
                                    value={input.Position}
                                    onChange={changeEventHandler}
                                    className='focus-visible:ring-offset-orange-100 focus-visible:ring-orange-200 my-1'
                                />
                            </div>
                            <div>
                                <Label>Location</Label>
                                <Input
                                    type="text"
                                    name="Location"
                                    value={input.Location}
                                    onChange={changeEventHandler}
                                    className='focus-visible:ring-offset-orange-100 focus-visible:ring-orange-200 my-1'
                                />
                            </div>
                            <div>
                                <Label>Job Type</Label>
                                <Input
                                    type="text"
                                    name="jobType"
                                    value={input.jobType}
                                    onChange={changeEventHandler}
                                    className='focus-visible:ring-offset-orange-100 focus-visible:ring-orange-200 my-1'
                                />
                            </div>
                            <div>
                                <Label>Experience</Label>
                                <Input
                                    type="text"
                                    name="Experience"
                                    value={input.Experience}
                                    onChange={changeEventHandler}
                                    className='focus-visible:ring-offset-orange-100 focus-visible:ring-orange-200 my-1'
                                />
                            </div>
                        </div>
                        <div className='my-5 focus-visible:ring-offset-orange-100 focus-visible:ring-orange-200'>
                            <Select onValueChange={selectChangeHandler} className='focus-visible:ring-offset-orange-100 focus-visible:ring-orange-200'>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="Select Your Company" />
                                </SelectTrigger>
                                <SelectContent className='bg-white '>
                                    <SelectGroup>
                                        {
                                            companies.map((company) => {
                                                return (
                                                    <SelectItem value={company?.companyName?.toLowerCase()} className='hover:bg-orange-50'>{company?.companyName}</SelectItem>
                                                )
                                            })
                                        }
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className='mb-5'>
                            <Label>Description</Label>
                            <Textarea
                                name="Description"
                                value={input.Description}
                                onChange={changeEventHandler}
                                className="focus-visible:ring-offset-orange-100 focus-visible:ring-orange-200 my-1"
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
                                Post New Job
                            </Button>
                        )}
                        {
                            companies.length == 0 && <p className='text-xs text-red-600 font-bold text-center my-4'>"Please Register a Company first"</p>
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PostRecJob