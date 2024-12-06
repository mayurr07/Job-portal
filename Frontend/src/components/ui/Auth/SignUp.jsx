/* eslint-disable no-undef */
// import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../label';
import { Input } from '../input';
import { RadioGroup } from '../radio-group';
import { Button } from '../button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constants';
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthUser, setLoading } from '@/redux/authSlice';
import { Loader2, Eye, EyeOff } from 'lucide-react'; // Import Eye and EyeOff icons
import { useState } from 'react';

const SignUp = () => {
  const [input, setInput] = useState({
    fullName: '',
    Email: '',
    phoneNum: '',
    Password: '',
    Role: '',
    file: '',
  });
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const sumbitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('fullName', input.fullName);
    formData.append('Email', input.Email);
    formData.append('phoneNum', input.phoneNum);
    formData.append('Password', input.Password);
    formData.append('Role', input.Role);
    if (input.file) {
      formData.append('file', input.file);
    }

    try {
      dispatch(setLoading(true));
      // Register User
      const res = await axios.post(`${USER_API_END_POINT}/Register`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success('Account created successfully! Logging you in...');

        // Auto Login
        const loginRes = await axios.post(
          `${USER_API_END_POINT}/login`,
          {
            Email: input.Email,
            Password: input.Password,
            Role: input.Role,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: true, // Include cookies
          }
        );

        if (loginRes.data.success) {
          // Save user data to Redux and localStorage
          dispatch(setAuthUser(loginRes.data.user));
          localStorage.setItem('authUser', JSON.stringify(loginRes.data.user));
          toast.success(res.data.message);
          navigate('/'); // Redirect to home
        } else {
          throw new Error('Auto-login failed.');
        }
      }
    } catch (error) {
      console.error('Signup/Login error:', error);
      toast.error(
        error.response?.data?.message || 'An error occurred during signup or login.'
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div>
      <Navbar />
      <div className='flex items-center justify-center max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-8'>
        <form
          onSubmit={sumbitHandler}
          className='w-full max-w-lg md:w-1/2 border border-orange-300 rounded-md p-6 md:p-10 my-10 bg-white shadow-md'
          style={{ boxShadow: '0 10px 6px #ff880040', borderRadius: '20px' }}
        >
          <h1 className='font-bold text-2xl md:text-xl mb-6 text-center'>Sign Up</h1>

          {/* Full Name */}
          <div className='mb-4'>
            <Label>Full Name <span className='text-orange-400'>*</span></Label>
            <Input
              type='text'
              value={input.fullName}
              name='fullName'
              onChange={changeEventHandler}
              placeholder='John Doe'
              className='focus:ring-2 focus:ring-orange-200 focus:outline-none mylabel w-full'
            />
          </div>

          {/* Email */}
          <div className='mb-4'>
            <Label>Email <span className='text-orange-400'>*</span></Label>
            <Input
              type='email'
              value={input.Email}
              name='Email'
              onChange={changeEventHandler}
              placeholder='YourEmail@email.com'
              className='focus:ring-2 focus:ring-orange-200 focus:outline-none mylabel w-full'
            />
          </div>

          {/* Password */}
          <div className='mb-4 relative'>
            <Label>Password <span className='text-orange-400'>*</span></Label>
            <Input
              type={passwordVisible ? 'text' : 'password'} // Toggle between 'text' and 'password'
              value={input.Password}
              onChange={changeEventHandler}
              name='Password'
              placeholder='..keep it secret'
              className='focus:ring-2 focus:ring-orange-200 focus:outline-none mylabel w-full'
            />
            {/* Eye icon to toggle password visibility */}
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 pt-5"
              onClick={() => setPasswordVisible(!passwordVisible)} // Toggle visibility
            >
              {passwordVisible ? (
                <Eye className="text-gray-500 hover:text-orange-500" />
              ) : (
                <EyeOff className="text-gray-500 hover:text-orange-500" />
              )}
            </button>
          </div>

          {/* Contact Number */}
          <div className='mb-4'>
            <Label>Contact Number <span className='text-orange-400'>*</span></Label>
            <Input
              type='text'
              value={input.phoneNum}
              onChange={changeEventHandler}
              name='phoneNum'
              placeholder='1234567890'
              maxLength='10'
              className='focus:ring-2 focus:ring-orange-200 focus:outline-none mylabel w-full'
            />
          </div>

          {/* Role */}
          <div className='mb-4'>
            <Label>Role <span className='text-orange-400'>*</span></Label>
            <RadioGroup className='flex flex-col md:flex-row items-center gap-4 my-5'>
              <div className='flex items-center space-x-2'>
                <Input
                  type='radio'
                  value='Student'
                  checked={input.Role === 'Student'}
                  onChange={changeEventHandler}
                  name='Role'
                  className='cursor-pointer custom-radio'
                />
                <Label>Student</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <Input
                  type='radio'
                  name='Role'
                  value='Recruiter'
                  checked={input.Role === 'Recruiter'}
                  onChange={changeEventHandler}
                  className='cursor-pointer custom-radio'
                />
                <Label>Recruiter</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Profile Picture */}
          <div className='mb-4'>
            <Label>Profile Picture <span className='text-sm text-gray-400'>(please upload image under 500kb)</span></Label>
            <Input
              accept='image/*'
              type='file'
              onChange={changeFileHandler}
              className='cursor-pointer w-full'
            />
          </div>

          {/* Submit Button */}
          {loading ? (
            <Button className='custom1 font-bold bg-[#ff8800] my-5 w-full'>
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
              Loading!
            </Button>
          ) : (
            <Button type='submit' className='custom1 font-bold bg-[#ff8800] my-5 w-full'>
              Sign Up
            </Button>
          )}

          {/* Link to Login */}
          <p className='text-center text-sm'>
            Already registered?{' '}
            <Link to='/login' className='text-orange-500 hover:text-orange-600 transition-all'>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
