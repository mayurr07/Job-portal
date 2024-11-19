import { setSingleCompany } from '@/redux/companySlice';
// import { setAllJobs } from '@/redux/jobSlice';
import { COM_API_END_POINT, JOB_API_END_POINT } from '@/utils/constants';
import axios from 'axios';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';

const useGetCompanyById = (companyId) => {
    const dispatch = useDispatch();
  useEffect(()=>{
    const fetchSingleCompany = async ()=>{
        try {
            const res = await axios.get(`${COM_API_END_POINT}/get/${companyId}`, {withCredentials:true});
            // console.log(res.data.company);
            if(res.data.success){
                dispatch(setSingleCompany(res.data.company));
            }
        } catch (error) {
            console.log(`${error}, Hooks issue, getAllJobs variable`)
        }
    }
    fetchSingleCompany();
  }, [companyId, dispatch])
}

export default useGetCompanyById