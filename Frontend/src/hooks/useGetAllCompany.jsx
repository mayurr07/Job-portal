import { setCompanies } from '@/redux/companySlice';
import { COM_API_END_POINT } from '@/utils/constants';
import axios from 'axios';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';

const useGetAllCompany = () => {
    const dispatch = useDispatch();
  useEffect(()=>{
    const fetchCompanies = async ()=>{
        try {
            const res = await axios.get(`${COM_API_END_POINT}/get`, {withCredentials:true});
            // console.log(res.data.companies);s
            if(res.data.success){
                dispatch(setCompanies(res.data.companies));
            }
        } catch (error) {
            console.log(`${error}, Hooks issue, useGetAllCompany variable`)
        }
    }
    fetchCompanies();
  }, [])
}

export default useGetAllCompany