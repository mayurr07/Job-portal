import { setAllAppliedJob } from '@/redux/jobSlice';
import { APP_API_END_POINT } from '@/utils/constants';
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAppliedJob = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchAppliedJob = async () => {
            try {
                const res = await axios.get(`${APP_API_END_POINT}/get`, {withCredentials:true});
                // console.log(res.data);
                
                if(res.data.success){
                    dispatch(setAllAppliedJob(res.data.application))
                }
            } catch (error) {
                console.log(`${error}, useGetAppliedJob issue`);

                
            }
        }
        fetchAppliedJob();
    }, [])
}
export default useGetAppliedJob;