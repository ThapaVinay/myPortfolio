import React from 'react'
import {RiInstagramLine, RiGithubLine, RiLinkedinLine} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center p-3 gap-x-5 text-xl lg:mr-10'>
      <a className="hover:text-accent trasition-all duration-300" href="https://www.linkedin.com/in/vinay-singh-thapa" target="_blank"><RiLinkedinLine /></a>
      <a className="hover:text-accent trasition-all duration-300" href="https://www.instagram.com/thapa._.vinay" target="_blank"><RiInstagramLine /></a>
      <a className="hover:text-accent trasition-all duration-300" href="https://github.com/ThapaVinay" target="_blank"> <RiGithubLine /></a>
    </div>
  )
}

export default Socials
