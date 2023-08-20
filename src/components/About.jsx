import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';
import circles from "/circles.png";
import TopLeftImage from "./TopLeftImage.jsx";
import ServiceSlider from "./ServiceSlider.jsx";
import  Tech  from "./Tech.jsx";
import { useEffect } from 'react';

// const ServiceCard = ({ index, title, icon }) => {
//   return (
//     <Tilt className='xs:w-[250px] w-full'>
//       <motion.div
//         variant={fadeIn("right", "spring", 0.5 * index, 0.75)}
//         className='w-ful green-pink-gradient p-[1px] rounded-[20px] shadow-card'
//       >
//         <div
//           options={{
//             max: 45,
//             scale: 1,
//             speed: 450
//           }}
//           className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
//         >
//           <img src={icon} alt={title}
//             className='w-16 h-16 object-contain' />
//           <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
//         </div>
//       </motion.div>
//     </Tilt>
//   )
// }

const About = () => {

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  return (
    <>

      <div className='w-[200px] xl:w-[300px] absolute right-0 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10'>
        <img src={circles} alt="circles" width={260} height={200} className='w-full h-full' />
      </div>

      <motion.div variants={textVariant()}>
        <p className='text-white font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Introduction</p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I'm a 3rd year B.Tech CSE AIML student at UPES, Dehradun, specializing in competitive coding and full stack development. Proficient in JavaScript and frameworks like React, Node.js, and three.js. With a strategic mindset from competitive coding, I create seamless applications that harmonize innovation and functionality. I'm dedicated to leaving a significant impact by transforming ideas into user-centric, cutting-edge experiences.

      </motion.p>

      <div className='mt-20 flex justify-center'>
        <div className="w-full xl:max-w-[75%] flex justify-center ">

          {/* {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))} */}

          <ServiceSlider />

        </div>
      </div>

      <Tech />

    </>
  )
}

export default SectionWrapper(About, "about");