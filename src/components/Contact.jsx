import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

  }

  const handleSubmit = (e) => {

  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>Get in touch</p>
        <p className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Contact.</p>


        <form ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Name
            </span>
            <input type="text" name="name" value={form.name} onChange={handleChange}
              placeholder="Enter your name"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Email
            </span>
            <input type="text" name="email" value={form.email} onChange={handleChange}
              placeholder="Enter your email"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Message
            </span>
            <textarea rows="7" name="message" value={form.message} onChange={handleChange}
              placeholder="Enter your message"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
          </label>

          <button type="submit"
            className='bg-tertiary my-3 outline-none w-fit px-8 py-3 text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, "contact");