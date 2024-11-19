import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { useSelector } from 'react-redux';

const AppliedJobs = () => {
    const { AllAppliedJob } = useSelector(store => store.job);
    return (
        <div className="p-4">
            {/* Caption for the Applied Jobs Table */}
            <TableCaption className="text-lg font-semibold mb-4  md:text-md flex">A list of your applied jobs</TableCaption>

            {/* Table for medium to large screens */}
            <div className="hidden sm:block">
                <Table className="w-full border border-gray-200 rounded-lg shadow-md shadow-orange-200">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="p-3">Date</TableHead>
                            <TableHead className="p-3">Job Role</TableHead>
                            <TableHead className="p-3">Company</TableHead>
                            <TableHead className="p-3 text-right">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {AllAppliedJob.length <= 0 ? <span>You have not Applied any jobs yet!.</span> : AllAppliedJob.map((AppliedJobs) => (
                            <TableRow key={AppliedJobs._id} className="hover:bg-gray-50">
                                <TableCell className="p-3">{AppliedJobs?.createdAt.split("T")[0]}</TableCell>
                                <TableCell className="p-3">{AppliedJobs?.Job?.Title}</TableCell>
                                <TableCell className="p-3">{AppliedJobs?.Job?.Company?.companyName}</TableCell>
                                <TableCell className="p-3 text-right">
                                    <Badge
                                        className={
                                            AppliedJobs?.Status === "accepted"
                                                ? "bg-green-100 text-green-700"
                                                : AppliedJobs?.Status === "rejected"
                                                    ? "bg-red-100 text-red-700"
                                                    : "bg-orange-100 text-orange-500"
                                        }
                                    >
                                        {AppliedJobs?.Status}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* Card Layout for mobile screens */}
            <div className="sm:hidden space-y-4">
                {[1, 2, 3, 4].map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg shadow-md shadow-orange-200 p-4">
                        <div className="flex justify-between items-center">
                            <h3 className="text-md font-semibold">Frontend Developer</h3>
                            <Badge className="bg-green-100 text-green-700">Selected</Badge>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">Company: Google</p>
                        <p className="text-sm text-gray-500">Date: 17-07-2024</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AppliedJobs;
