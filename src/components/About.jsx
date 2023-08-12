import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { services } from '../constants';
import { fadeIn, textVariant } from "../utils/motion";
import {SectionWrapper} from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variant={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-ful green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
           <img src={icon} alt={title} 
           className='w-16 h-16 object-contain'/>
           <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3> 
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className='text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]'> Introduction</p>
        <p className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'> Overview</p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I am a skilled software developer with experience in javascript and expertise in frameworks like react, node.js and three.js. I am a quick learner and collaborate closely with clients to create efficient, scalable and user - friendly solutions that solve real-world problems.

      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">

        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

      </div>

    </>
  )
}

export default SectionWrapper(About, "about");