import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
            {/* Main 404 message */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center"
            >
                <motion.h1
                    className="text-8xl font-extrabold text-orange-500"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
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
                    We're really sorry about that.
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

            {/* Animation for logo */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute bottom-8 text-center"
            >
                <p className="text-sm text-gray-500">© {new Date().getFullYear()} Your Company</p>
            </motion.div>
        </div>
    );
}
