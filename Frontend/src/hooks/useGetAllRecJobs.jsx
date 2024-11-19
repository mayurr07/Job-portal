import { setAllRecJobs } from '@/redux/jobSlice';
import { JOB_API_END_POINT } from '@/utils/constants';
import axios from 'axios';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';

const useGetAllRecJobs = () => {
    const dispatch = useDispatch();
  useEffect(()=>{
    const fetchAllRecJobs = async ()=>{
        try {
            const res = await axios.get(`${JOB_API_END_POINT}/getAdminJobs`, {withCredentials:true});
            // console.log(res.data.jobs);
            if(res.data.success){
                dispatch(setAllRecJobs(res.data.jobs));
            }
        } catch (error) {
            console.log(`${error}, Hooks issue, getAllJobs variable`)
        }
    }
    fetchAllRecJobs();
  }, [])
}

export default useGetAllRecJobs