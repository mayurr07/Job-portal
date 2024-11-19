import { motion } from 'framer-motion';

const AnimatedText = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },  // Initially hidden
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },  // Animation when visible
  };

  return (
    <motion.h1
      initial="hidden"  // Start with hidden state
      animate="visible" // Animate to visible state
      variants={textVariants} // Apply the defined variants
    >
      Access a Diverse Portfolio of Job Openings Tailored to Your Skills
    </motion.h1>
  );
};

export default AnimatedText;