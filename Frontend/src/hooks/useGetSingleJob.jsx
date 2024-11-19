import { setSingleJob } from '@/redux/jobSlice';
import { JOB_API_END_POINT } from '@/utils/constants';
import axios from 'axios';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';

const useGetSingleJob = (jobId) => {
    const dispatch = useDispatch();
  useEffect(()=>{
    const fetchSingleJob = async ()=>{
        try {
            const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {withCredentials:true});
            // console.log(res.data.jobs);
            if(res.data.success){
                dispatch(setSingleJob(res.data.jobs));
            }
        } catch (error) {
            console.log(`${error}, Hooks issue, getSingleJob variable`)
        }
    }
    fetchSingleJob();
  }, [])
}

export default useGetSingleJob