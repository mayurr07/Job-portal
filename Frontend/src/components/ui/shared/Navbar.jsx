import { Popover, PopoverContent, PopoverTrigger } from '../popover';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import { Avatar, AvatarImage } from '../avatar';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from "../../../assets/ujlogo.png";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthUser } from '@/redux/authSlice';
import { toast } from 'sonner';
import Default_avatar from '../../../assets/default_image.jpg';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../dropdown-menu';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constants';

const Navbar = () => {
    const { user } = useSelector((store) => store.auth);
    const [menuOpen, setMenuOpen] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const handleLogout = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setAuthUser(null));
                navigate('/');
                toast.success(res.data.message);
            }
        } catch (error) {
            console.error("Logout failed", error);
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error("Logout failed. Please try again.");
            }
        }
    };

    const dropdownVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="bg-white bg-opacity-80 text-black w-full z-50 shadow-lg"
            style={{ boxShadow: '0 10px 6px rgba(0, 0, 0, 0.1)' }}
        >
            <div className="flex items-center justify-between mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2">
                <div className="flex items-center p-2">
                    <Link to="/">
                        <Avatar className="cursor-pointer w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 border-4 border-orange-300 shadow-md rounded-full overflow-hidden">
                            <AvatarImage src={logo} alt="logo" className="w-full h-full object-cover" />
                        </Avatar>
                    </Link>
                </div>

                {/* Menu for larger screens */}
                <div className="hidden lg:flex items-center gap-14">
                    <ul className="flex items-center gap-5 cursor-pointer">
                        {user && user.Role === 'Recruiter' ? (
                            <>
                                <li><Link to="/admin/company">Companies</Link></li>
                                <li><Link to="/admin/jobs">Jobs</Link></li>
                                <li>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <div className='cursor-pointer flex items-center'>
                                                <span>Links</span>
                                                <ChevronDown className="ml-1 w-4 h-4" />
                                            </div>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="bg-white rounded-md shadow-lg">
                                            <motion.div
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                                variants={dropdownVariants}
                                                className="bg-white rounded-md shadow-lg p-2"
                                            >
                                                <DropdownMenuItem>
                                                    <Link to="/about"><li>About Us</li></Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Link to="/team"><li>Terms and condition</li></Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Link to="/privacyandpolicy"><li>Privacy & Policy</li></Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Link to="/contact"><li>Contact-us</li></Link>
                                                </DropdownMenuItem>
                                            </motion.div>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </li>
                            </>
                        ) : user && user.Role === 'Student' ? (
                            <>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/jobs">Jobs</Link></li>
                                <li><Link to="/browse">Browse</Link></li>
                                <li>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <div className='cursor-pointer flex items-center'>
                                                <span>Links</span>
                                                <ChevronDown className="ml-1 w-4 h-4" />
                                            </div>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="bg-white rounded-md shadow-lg">
                                            <motion.div
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                                variants={dropdownVariants}
                                                className="bg-white rounded-md shadow-lg p-2"
                                            >
                                                <DropdownMenuItem>
                                                    <Link to="/about"><li>About Us</li></Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Link to="/team"><li>Terms and condition</li></Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Link to="/careers"><li>Privacy & Policy</li></Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Link to="/contact"><li>Contact-us</li></Link>
                                                </DropdownMenuItem>
                                            </motion.div>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </li>
                            </>
                        ) : (
                            <>
                                <li><Link to="/">Home</Link></li>
                                <li>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <div className='cursor-pointer flex items-center'>
                                                <span>Links</span>
                                                <ChevronDown className="ml-1 w-4 h-4" />
                                            </div>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="bg-white rounded-md shadow-lg">
                                            <motion.div
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                                variants={dropdownVariants}
                                                className="bg-white rounded-md shadow-lg p-2"
                                            >
                                                <DropdownMenuItem>
                                                    <Link to="/about"><li>About Us</li></Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Link to="/team"><li>Terms and condition</li></Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Link to="/careers"><li>Privacy & Policy</li></Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Link to="/contact"><li>Contact-us</li></Link>
                                                </DropdownMenuItem>
                                            </motion.div>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </li>
                                <li><Link to="/jobs">Jobs</Link></li>
                            </>
                        )}
                    </ul>

                    {!user ? (
                        <div className="flex gap-4">
                            <Link to="/login">
                                <Button variant="outline" className="custom font-medium">Login</Button>
                            </Link>
                            <Link to="/signup">
                                <Button className="custom1 font-medium bg-[#ff8800]">Sign Up</Button>
                            </Link>
                        </div>
                    ) : (
                        <Popover>
                            <PopoverTrigger asChild>
                                <Avatar className="cursor-pointer custom-avatar-border">
                                    <AvatarImage src={user?.Profile?.profilePhoto || Default_avatar} alt="@shadcn" className='border-4 border-orange-300 shadow-md rounded-full' />
                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent className="w-80 bg-white">
                                <div className="flex space-y-2 gap-5">
                                    <Avatar className='border-4 border-orange-300 shadow-md rounded-full'>
                                        <AvatarImage src={user?.Profile?.profilePhoto || Default_avatar} alt="@shadcn" />
                                    </Avatar>
                                    <div>
                                        <h3 className="cursor-pointer">{user?.fullName}</h3>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    {user && user.Role === 'Student' && (
                                        <Button variant="link" className="font-bold button"><Link to='/profilee'>View profile</Link></Button>
                                    )}
                                    <Button variant="outline" className="font-bold custom" onClick={handleLogout}>Logout</Button>
                                </div>
                            </PopoverContent>
                        </Popover>
                    )}
                </div>

                {/* Hamburger Menu for small screens */}
                <div className="lg:hidden flex items-center">
                    <button onClick={toggleMenu} className="relative">
                        <motion.div
                            initial={{ scale: 1, rotate: 0 }}
                            animate={{ scale: menuOpen ? 1.2 : 1, rotate: menuOpen ? 90 : 0, transition: { duration: 0.3 } }}
                        >
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: [0.42, 0, 0.58, 1] }}
                className="overflow-hidden lg:hidden flex flex-col items-start gap-4 px-4 py-2"
            >
                <ul className="flex flex-col gap-3 w-full">
                    {user && user.Role === 'Recruiter' ? (
                        <>
                            <li><Link to="/admin/company">Companies</Link></li>
                            <li><Link to="/admin/jobs">Jobs</Link></li>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <div className='cursor-pointer flex items-center'>
                                        <span>Links</span>
                                        <ChevronDown className="ml-1 w-4 h-4" />
                                    </div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="bg-white rounded-md shadow-lg">
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={dropdownVariants}
                                        className="bg-white rounded-md shadow-lg p-2"
                                    >
                                        <DropdownMenuItem>
                                            <Link to="/about"><li>About Us</li></Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link to="/team"><li>Terms and condition</li></Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link to="/careers"><li>Privacy & Policy</li></Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link to="/careers"><li>Contact-us</li></Link>
                                        </DropdownMenuItem>
                                    </motion.div>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </>
                    ) : user && user.Role === 'Student' ? (
                        <>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/jobs">Jobs</Link></li>
                            <li><Link to="/browse">Browse</Link></li>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <div className='cursor-pointer flex items-center'>
                                        <span>Links</span>
                                        <ChevronDown className="ml-1 w-4 h-4" />
                                    </div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="bg-white rounded-md shadow-lg">
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={dropdownVariants}
                                        className="bg-white rounded-md shadow-lg p-2"
                                    >
                                        <DropdownMenuItem>
                                            <Link to="/about"><li>About Us</li></Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link to="/team"><li>Terms and condition</li></Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link to="/careers"><li>Privacy & Policy</li></Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link to="/contact"><li>Contact-us</li></Link>
                                        </DropdownMenuItem>
                                    </motion.div>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </>
                    ) : (
                        <>
                            <li><Link to="/">Home</Link></li>
                            <li>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <div className='cursor-pointer flex items-center'>
                                            <span>Links</span>
                                            <ChevronDown className="ml-1 w-4 h-4" />
                                        </div>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="bg-white rounded-md shadow-lg">
                                        <motion.div
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                            variants={dropdownVariants}
                                            className="bg-white rounded-md shadow-lg p-2"
                                        >
                                            <DropdownMenuItem>
                                                <Link to="/about"><li>About Us</li></Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Link to="/team"><li>Terms and condition</li></Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Link to="/careers"><li>Privacy & Policy</li></Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Link to="/contact"><li>Contact-us</li></Link>
                                            </DropdownMenuItem>
                                        </motion.div>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </li>
                            <li><Link to="/jobs">Jobs</Link></li>
                        </>
                    )}
                </ul>

                {!user ? (
                    <div className="flex flex-col gap-4 w-full">
                        <Link to="/login">
                            <Button variant="outline" className="w-full">Login</Button>
                        </Link>
                        <Link to="/signup">
                            <Button className="w-full bg-[#ff8800]">Sign Up</Button>
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-col gap-4 w-full">
                        {user && user.Role === 'Student' && (
                            <Button variant="link" className="font-bold button"><Link to='/profilee'>View profile</Link></Button>
                        )}
                        <Button variant="outline" className="w-full" onClick={handleLogout}>Logout</Button>
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
};

export default Navbar;
