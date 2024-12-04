import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/ui/Auth/Login.jsx';
import SignUp from './components/ui/Auth/SignUp.jsx';
import Home from './components/Home.jsx';
import Jobs from './components/Jobs.jsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Browse from './components/Browse.jsx';
import Profilep from './components/Profilep.jsx';
import Jobsdesc from './components/Jobsdesc.jsx';
import Companies from './components/Recruiters/Companies.jsx';
import CompanyCreate from './components/Recruiters/CompanyCreate.jsx';
import CompanySetup from './components/Recruiters/CompanySetup.jsx';
import RecJobs from './components/Recruiters/RecJobs.jsx';
import PostRecJob from './components/Recruiters/PostRecJob.jsx';
import Applicants from './components/Recruiters/Applicants.jsx';
import AboutUs from './components/Links/AboutUs.jsx';
import ContactUs from './components/Links/ContactUs.jsx';
import TermsAndConditions from './components/Links/TermsandConditions.jsx';





// Updated ErrorPage component with heartbeat animation
const ErrorPage = () => {
  // Heartbeat animation for the 404
  const heartbeat = {
    initial: { scale: 1, color: '#f97316' }, // initial color (orange)
    animate: {
      scale: [1, 1.1, 1], // heart-beat effect
      color: ['#f97316', '#f87171', '#f97316'], // orange to slight red
      transition: {
        duration: 1.5, // duration of each cycle
        repeat: Infinity, // infinite loop
        repeatType: 'loop',
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      {/* Main 404 message with heartbeat effect */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <motion.h1
          className="text-8xl font-extrabold"
          variants={heartbeat} // Apply heartbeat animation
          initial="initial"
          animate="animate"
        >
          404
        </motion.h1>
        <motion.p
          className="text-2xl mt-4 font-light text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Oops! We couldn’t find the page you were looking for.
        </motion.p>
        <motion.p
          className="text-lg mt-2 font-light text-orange-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          We`re really sorry about that, It`s not you its us.
        </motion.p>
      </motion.div>

      {/* Animation for "Go Back Home" button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-8"
      >
        <Link to="/" className="text-white bg-orange-500 px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300">
          Go Back Home
        </Link>
      </motion.div>

      {/* Animation for footer logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute bottom-8 text-center"
      >
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Ujval Job Consultancy</p>
      </motion.div>
    </div>
  );
};

// Router setup with error handling
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />, // Handle errors for Home route
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />, // Handle errors for Login route
  },
  {
    path: '/signup',
    element: <SignUp />,
    errorElement: <ErrorPage />, // Handle errors for Signup route
  },
  {
    path: '/jobs',
    element: <Jobs />,
    errorElement: <ErrorPage />, // Handle errors for Jobs route
  },
  {
    path: '/browse',
    element: <Browse />,
    errorElement: <ErrorPage />, // Handle errors for Jobs route
  },
  {
    path: '/profilee',
    element: <Profilep />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/description/:id',
    element: <Jobsdesc/>,
    errorElement: <ErrorPage />,
  },
  //=================================================

  //Recruiter side routes

  {
    path:"/admin/company/create",
    element: <CompanyCreate/>,
    errorElement:<ErrorPage/>
  },
  {
    path:"/admin/company",
    element: <Companies/>,
    errorElement: <ErrorPage/>
  },
  {
    path:"/admin/company/:id",
    element:<CompanySetup/>,
    errorElement:<ErrorPage/>
  },
  // =============================== for admin jobs====
  {
    path:"/admin/jobs",
    element:<RecJobs/>,
    errorElement:<ErrorPage/>
  },
  {
    path:"/admin/jobs/create",
    element: <PostRecJob/>,
    errorElement:<ErrorPage/>
  },
  {
    path:"/admin/jobs/:id/applicants",
    element:<Applicants/>,
    errorElement:<ErrorPage/>
  },
  // ===============LINKS=====================================
  {
    path:"/about",
    element:<AboutUs/>,
    errorElement:<ErrorPage/>
  },
  {
    path:"/contact",
    element:<ContactUs/>,
    errorElement:<ErrorPage/>

  },
  {
    path:"/TermsAndConditions",
    element:<TermsAndConditions/>,
    errorElement:<ErrorPage/>
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
