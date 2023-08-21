import React, { useEffect } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import bulb from "/bulb.png";


const ExperienceCard = ({ experience }) => {
  return (

    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: "#fff" }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img src={experience.icon} alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain' />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px]'>{experience.title}</h3>
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>{experience.company_name}</p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`}
            className="text-secondary text-[14px]  pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}

      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
        <div className='w-[200px] xl:w-[260px] absolute -left-52 -bottom-12 mix-blend-color-dodge rotate-12  duration-75 z-10'>
          <img src={bulb} alt="bulb" width={260} height={200} className='w-full h-full' />
        </div>

        <motion.div
          variants={textVariant()}
        >
          <p className='text-white font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'> Work Experience</p>
        </motion.div>

        <div className="mt-20 flex flex-col mb-10">
          <VerticalTimeline>
            {experiences.map((experience, index) => {
              return <ExperienceCard key={index} experience={experience} />
            })

            }
          </VerticalTimeline>
        </div>
    </>
  )
}

export default SectionWrapper(Experience, "experience");