/* eslint-disable no-undef */
// import React, { useEffect } from 'react'
import Navbar from '../ui/shared/Navbar'
import ApplicantsTable from './ApplicantsTable'
import axios from 'axios';
import { APP_API_END_POINT } from '@/utils/constants';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAllApplicants } from '@/redux/applicationSlice';

const Applicants = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const { Applicants } = useSelector(store => store.application);

    useEffect(() => {
        const fetchAllApplicants = async () => {
            try {
                const res = await axios.get(`${APP_API_END_POINT}/${params.id}/Applicants`, { withCredentials: true });
                // console.log(res.data);
                dispatch(setAllApplicants(res.data.job));
            } catch (error) {
                console.log(`${error}, Applicants page issue `);
            }
        }
        fetchAllApplicants();
    }, [params.id, dispatch]);

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="max-w-7xl mx-auto my-5 px-4 sm:px-6 lg:px-8">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold my-4 lg:my-6 text-gray-800">
                    Total Applicants (<span>{Applicants?.Application?.length || 0}</span>)
                </h1>
                <div className="bg-white shadow-md shadow-orange-200 rounded-lg overflow-hidden">
                    <ApplicantsTable />
                </div>
            </div>
        </div>
    )
}

export default Applicants;
