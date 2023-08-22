import React, {useEffect} from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { ComputersCanvas } from './canvas'
import hi from "../assets/hi.gif"
import '@fontsource/sora';
import  TopLeftImage  from "./TopLeftImage.jsx";

const Hero = () => {

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  return (
    <>
      <TopLeftImage />
      <div className="relative w-full h-screen mx-auto">
        <div className={"sm:px-16 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5"}>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>

          <div>
            <h1 className='font-black text-white lg:text-[60px] sm:text-[40px] xs:text-[30px] text-[30px] lg:leading-[78px] mt-2 flex gap-4' style={{ fontFamily: 'Sora, sans-serif' }}>Hi,<img className="xl:w-20 xl:h-20 h-10 w-10" src={hi} alt="hi" /> I'm <span className='text-[#F13024] font-bold'>Vinay</span></h1>
            <p className='text-[#dfd9ff] font-medium lg:text-[20px] sm:text-[18px] xs:text-[18px] text-[16px] lg:leading-[40px] mt-2'> I am an AIML Enthusiast <br className='sm:block hidden' />and a full stack developer. </p>
          </div>

        </div>


        {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div 
            animate={{
              y:[0,24,0]
            }}
            transition={{
              duration:1.5,
              repeat:Infinity,
              repeatType: 'loop'
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}

        {/* bg-image */}
        <div className="w-[1200px] h-full absolute right-0 bottom-0 ">
          <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge  translate-z-0"></div>
        </div>
        <ComputersCanvas />
      </div>
    </>
  )
}

export default Hero