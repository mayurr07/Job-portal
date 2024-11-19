import React, { useState } from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { USER_API_END_POINT } from '@/utils/constants';
import axios from 'axios';
import { updateUser } from '@/redux/authSlice'; // update the user state in the Redux store

const ProfileUpdate = ({ open, setOpen }) => {
    const dispatch = useDispatch();
    const { user } = useSelector(store => store.auth);
    const [input, setInput] = useState({
        fullName: user?.fullName || '',
        Email: user?.Email || '',
        phoneNum: user?.phoneNum || '',
        bio: user?.Profile?.bio || '',
        skills: user?.Profile?.skills?.join(', ') || '',
        file: null,
    });
    const [loading, setLoading] = useState(false);

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const fileChangeHandler = (e) => {
        const file = e.target.files[0];
        setInput({ ...input, file });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('fullName', input.fullName);
        formData.append('Email', input.Email);
        formData.append('phoneNum', input.phoneNum);
        formData.append('bio', input.bio);
        formData.append('skills', input.skills);

        if (input.file) {
            formData.append('file', input.file);
            console.log(input.file);
        }

        try {
            const res = await axios.post(`${USER_API_END_POINT}/profile/update`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                withCredentials: true,
            });

            if (res.data.success) {
                // Update local state or redux state
                dispatch(updateUser(res.data.user)); // update user in the Redux store
                setOpen(false); // Close dialog after update
            } else {
                console.error(`Failed to update profile: ${res.data.message}`);
            }
        } catch (error) {
            console.error(`Error updating profile: ${error}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="bg-white overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>Update Profile</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="fullName" className="text-right">Full Name</Label>
                                <Input
                                    id="fullName"
                                    name="fullName"
                                    value={input.fullName}
                                    onChange={changeEventHandler}
                                    className="col-span-3 hover:border-orange-200"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="bio" className="text-right">Bio</Label>
                                <Input
                                    id="bio"
                                    name="bio"
                                    value={input.bio}
                                    onChange={changeEventHandler}
                                    className="col-span-3 hover:border-orange-200"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="phoneNum" className="text-right">Phone Number</Label>
                                <Input
                                    id="phoneNum"
                                    name="phoneNum"
                                    value={input.phoneNum}
                                    onChange={changeEventHandler}
                                    className="col-span-3 hover:border-orange-200"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="email" className="text-right">Email</Label>
                                <Input
                                    id="Email"
                                    name="Email"
                                    value={input.Email}
                                    type="Email"
                                    onChange={changeEventHandler}
                                    className="col-span-3 hover:border-orange-200"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="skills" className="text-right">Skills</Label>
                                <Input
                                    id="skills"
                                    name="skills"
                                    value={input.skills}
                                    onChange={changeEventHandler}
                                    className="col-span-3 hover:border-orange-200"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="file" className="text-right">Resume</Label>
                                <Input
                                    id="file"
                                    name="file"
                                    type="file"
                                    accept="application/pdf"
                                    onChange={fileChangeHandler}
                                    className="col-span-3 hover:border-orange-200"
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button
                                type="submit"
                                className="custom1 font-bold bg-[#ff8800] my-5 w-full"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Loading...
                                    </>
                                ) : (
                                    "Done"
                                )}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ProfileUpdate;
