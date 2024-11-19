import React, { useEffect, useState } from 'react';
import { Avatar, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Contact, Mail, Pen } from 'lucide-react';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './ui/shared/Navbar';
import AppliedJobs from './AppliedJobs';
import ProfileUpdate from './ProfileUpdate';
import useGetAppliedJob from '@/hooks/useGetAppliedJob';
import default_avatar from '../assets/default_image.jpg'
// const skills = ["Html", "Css", "Javascript", "Reactjs"];
// const isResume = true;




const Profilep = () => {

    const dispatch = useDispatch();

    useGetAppliedJob();
    const [open, setOpen] = useState(false);
    const {user} = useSelector(store=>store.auth);

    
    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8 shadow-lg shadow-orange-100">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex items-center gap-4">
                        <Avatar className="h-24 w-24 custom-avatar-border">
                            <AvatarImage src={user?.Profile?.profilePhoto || default_avatar} alt="profile" />
                        </Avatar>
                        <div>
                            <h1 className="font-medium text-xl">{user?.fullName || "Name not available"}</h1>
                            <p>{user?.Profile?.bio}</p>
                        </div>
                    </div>
                    <Button onClick={() => setOpen(true)} className="mt-4 sm:mt-0" variant="outline">
                        <Pen />
                    </Button>
                </div>

                {/* Contact Information */}
                <div className="my-5">
                    <div className="flex items-center gap-3 my-2">
                        <Mail className="text-gray-500" />
                        <span>{user?.Email}</span>
                    </div>
                    <div className="flex items-center gap-3 my-2">
                        <Contact className="text-gray-500" />
                        <span>{user?.phoneNum}</span>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="my-5">
                    <h1 className="text-lg font-semibold">Skills</h1>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {user?.Profile?.skills.length !== 0 ? user?.Profile?.skills.map((item, index) => (
                            <Badge key={index} className="bg-orange-100 text-gray-900">
                                {item}
                            </Badge>
                        )) : (
                            <span className="text-gray-500">N/A</span>
                        )}
                    </div>
                </div>

                {/* Resume Section */}
                <div className="grid w-full max-w-sm items-center gap-1.5 mt-5">
                    <Label className="text-md font-bold">Resume</Label>
                    {user?.Profile?.resume ? (
                        <a target="blank" className="text-blue-500 hover:underline cursor-pointer" href={user?.Profile?.resume}>
                            {user?.Profile?.resumeOriginalName}
                        </a>
                    ) : (
                        <span>N/A</span>
                    )}
                </div>
            </div>

            {/* Applied Jobs Section */}
            <div className="max-w-4xl mx-auto bg-white rounded-2xl my-5 p-5 shadow-lg shadow-orange-200">
                <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
                <AppliedJobs />
            </div>
            <ProfileUpdate open={open} setOpen={setOpen}/>
        </div>
    );
}

export default Profilep;
