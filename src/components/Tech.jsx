import React from 'react'
import {BallCanvas} from './canvas';
import {SectionWrapper} from '../hoc';
import {technologies} from '../constants';


const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-12'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 bg-[#6c757d] rounded-full gap-[12px] flex flex-col justify-center items-center text-sm' key={technology.name}>
          {/* <BallCanvas icon={technology.icon} /> */}
          <img className="w-[60px] h-[60px]" src={technology.icon} alt={technology.name} />
          <p className='text-white text-[12px] -mt-2'>{technology.name}</p>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech,"tech");