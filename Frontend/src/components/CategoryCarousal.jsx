import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Graphic Designer",
  "Java Developer",
  "Python Developer",
  "Software Development Engineer"
];



const CategoryCarousel = () => {
  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  // Animation for the carousel items
  const itemVariants = {
    hover: { scale: 1.05 },
    whileInView: {
      x: [0, 20, 0], // Small horizontal movement
      transition: {
        duration: 2,
        ease: 'easeInOut',
        repeat: 10,
      },
    },
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query))
    navigate("/browse")
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={headingVariants}
      className='customCar'
    >
      <Carousel className='w-full max-w-xl mx-auto my-20'>
        <CarouselContent>
          {category.map((cat, index) => (
            <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
              <motion.div
                variants={itemVariants}
                whileInView="whileInView"
                initial="hover"
                whileHover={{ scale: 1.2 }}
              >
                <Button onClick={() => searchJobHandler(category)} className='buttonCar'>{cat}</Button>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='Arrowbut' />
        <CarouselNext className='Arrowbut' />
      </Carousel>
    </motion.div>
  );
};

export default CategoryCarousel;
