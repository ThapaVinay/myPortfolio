import React, {useEffect} from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { github } from "../assets";
import { live } from "../assets";

import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';


// const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
//   return (
//     <motion.div
//       variants={fadeIn("up", "spring", index * 0.5, 0.75)}
//     >
//       <Tilt
//         options={{
//           max: 45, scale: 1, speed: 450
//         }}
//         className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
//       >
//         <div className="relative w-full h-[230px]">
//           <img src={image} alt={name}
//             className='w-full h-full object-cover rounded-2xl'
//           />

//           <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
//             <div onClick={() => window.open(source_code_link, "_blank")}
//               className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
//             >
//               <img src={github} alt="github"
//                 className='w-1/2 h-1/2 object-contain'
//               />
//             </div>
//           </div>
//         </div>

//         <div className="mt-5">
//           <h3 className='text-white font-bold text-[24px]'>{name}</h3>
//           <p className='mt-2 text-secondary text-[14px]'>{description}</p>
//         </div>

//         <div className="mt-4 flex flex-wrap gap-2">
//           {tags.map((tag) => (
//             <p key={tag.name} className={`text-[14px] ${tag.color}`}>
//               #{tag.name}
//             </p>
//           ))}
//         </div>
//       </Tilt>

//     </motion.div>
//   )
// }


const ProjectCard = () => {
  return (
    <motion.div
      variants={fadeIn('down', "", 0.1, 1)}
    >

      <Swiper
        navigation={{
          clickable: true
        }}
        pagination={{
          clickable: true
        }}
        modules={[Pagination, Navigation]}
        className='h-[500px] xl:h-[400px]'
        style={{ '--swiper-navigation-color': '#F13024', '--swiper-pagination-color': '#F13024' }}
      >
        {projects.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='flex flex-col xl:flex-row gap-x-8 h-full px-16 items-center '>
                <Tilt
                  options={{
                    max: 30, scale: 1, speed: 450
                  }}>
                  {/* image, name */}
                  <div className='w-full max-w-[400px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-2'>
                    <div className='flex flex-col justify-center text-center'>
                      <div className='relative xl:h-[230px] xl:w-[300px] h-[200px] w-[250px]'>
                        <img src={slide.image} alt={slide.name} className='w-full h-full object-cover rounded-2xl' />
                      </div>

                      <div className="absolute inset-0 xl:mt-2 xl:mr-4 flex justify-end m-2 gap-x-2 ">
                        <div onClick={() => window.open(slide.source_code_link, "_blank")}
                          className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                          <img src={github} alt="github"
                            className='w-1/2 h-1/2 object-contain'
                          />
                        </div>

                        <div onClick={() => window.open(slide.source_code_link, "_blank")}
                          className='bg-gray-300 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                          <img src={live} alt="live"
                            className='w-3/4 h-3/4 object-contain'
                          />
                        </div>

                      </div>
                    </div>
                    <div className='text-lg pt-4 font-bold'>{slide.name}</div>
                  </div>
                </Tilt>
                {/* description */}

                <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-full relative xl:pl-20 xl:pr-5'>
                  <div className=" text-secondary text-[16px] text-center xl:text-left leading-[30px]">{slide.description}</div>
                  <div className="mt-4 flex justify-center xl:justify-start flex-wrap gap-2">
                    {slide.tags.map((tag) => (
                      <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                        #{tag.name}
                      </p>
                    ))}
                  </div>
                </div>

              </div>
            </SwiperSlide>
          )
        })

        }
      </Swiper>

    </motion.div>
  )
}

const Works = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className='text-white font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'> Projects</p>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Dive into my portfolio, where I bring my skills and experience to life through a collection of real-world projects. Each project serves as a testament to my problem-solving capabilities, proficiency with diverse technologies, and adept project management. Feel free to explore each project's code repository and live demo to witness firsthand how I bring innovation and functionality together.
        </motion.p>
      </div>

      <div className='mt-20 xl:mt-0 mb-10'>

        {/* {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))} */}

        <ProjectCard />

      </div>

    </>
  )
}

export default SectionWrapper(Works, "projects");