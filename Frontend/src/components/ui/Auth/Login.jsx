import { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../label';
import { Input } from '../input';
import { RadioGroup } from '../radio-group';
import { Button } from '../button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { USER_API_END_POINT } from '@/utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthUser, setLoading } from '@/redux/authSlice';
import { Loader2, Eye, EyeOff } from 'lucide-react'; // Import icons for eye toggle

const Login = () => {
  const [input, setInput] = useState({
    Email: '',
    Password: '',
    Role: '',
  });
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setAuthUser(res.data.user)); // Save to Redux
        localStorage.setItem('authUser', JSON.stringify(res.data.user)); // Save to localStorage after successful login
        navigate('/');
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error(error?.response?.data?.message || 'An error occurred.');
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <form
          onSubmit={submitHandler}
          className="w-full max-w-lg md:w-1/2 border border-orange-300 rounded-md p-6 md:p-10 my-10 bg-white shadow-md"
          style={{ boxShadow: '0 10px 6px #ff880040', borderRadius: '20px' }}
        >
          <h1 className="font-bold text-2xl md:text-xl mb-6 text-center">Login</h1>
          {/* Email */}
          <div className="mb-4">
            <Label>Email <span className='text-orange-400'>*</span></Label>
            <Input
              type="email"
              value={input.Email}
              name="Email"
              onChange={changeEventHandler}
              placeholder="YourEmail@email.com"
              className="focus:ring-2 focus:ring-orange-200 focus:outline-none mylabel w-full"
              required
            />
          </div>
          {/* Password */}
          <div className="mb-4 relative">
            <Label>Password <span className='text-orange-400'>*</span></Label>
            <Input
              type={passwordVisible ? 'text' : 'password'} // Toggle between 'text' and 'password'
              value={input.Password}
              onChange={changeEventHandler}
              name="Password"
              placeholder="..keep it secret"
              className="focus:ring-2 focus:ring-orange-200 focus:outline-none mylabel w-full"
              required
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
          {/* Role */}
          <div className="mb-4">
            <Label>Role <span className='text-orange-400'>*</span></Label>
            <RadioGroup className="flex items-center gap-4">
              <div className="flex items-center">
                <Input
                  type="radio"
                  value="Student"
                  checked={input.Role === 'Student'}
                  onChange={changeEventHandler}
                  name="Role"
                  className="cursor-pointer custom-radio"
                />
                <Label className="ml-2">Student</Label>
              </div>
              <div className="flex items-center">
                <Input
                  type="radio"
                  name="Role"
                  value="Recruiter"
                  checked={input.Role === 'Recruiter'}
                  onChange={changeEventHandler}
                  className="cursor-pointer custom-radio"
                />
                <Label className="ml-2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          {/* Submit Button */}
          {loading ? (
            <Button className="custom1 font-bold bg-[#ff8800] my-5 w-full">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading!
            </Button>
          ) : (
            <Button type="submit" className="custom1 font-bold bg-[#ff8800] my-5 w-full">
              Login
            </Button>
          )}
          {/* Create Account */}
          <p className="text-center text-sm">
            Create Account {' '}
            <Link to="/signup" className="text-orange-500 hover:text-orange-600 transition-all">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
