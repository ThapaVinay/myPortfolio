import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";
import { EarthCanvas, StarsCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { fadeIn } from '../utils/motion';
import { BsArrowRight } from "react-icons/bs";


const ContactForm = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })   // ...form -> spreads the form
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send('service_pxdt8p6', 'template_o19fwol',
      {
        from_name: form.name,
        to_name: 'Vinay',
        from_email: form.email,
        to_email: 'thechampthapa@gmail.com',
        message: form.message
      },
      'hYV0RmXCoVq83w-U_'
    )
      .then(() => {
        setLoading(false);
        alert("Thank You");
        setForm({
          name: "",
          email: "",
          message: "",
        })
      }, (error) => {
        setLoading(false);

        console.log(error);
        alert("something went wrong");
      }
      )

  }


  return (
    <motion.div
      variants={fadeIn('down', "", 0.1, 1)}
    >
      <div className='h-full bg-primary/30'>
        <div className="container mx-auto py-8 text-center xl:text-left flex items-center justify-center h-full">

          {/* text and form */}
          <div className="flex flex-col w-full max-w-[700px] ">

            {/* text */}
            <h2 className='h2 text-center mb-12'>
              Let's <span className='text-accent'>connect</span>
            </h2>

            {/* form */}
            <form onSubmit={handleSubmit}
              className='flex-1 flex flex-col gap-6 w-full mx-auto'>
              <div className="flex gap-x-6 w-full">
                <input type="text" placeholder='name' name="name" className='input' value={form.name} onChange={handleChange} />
                <input type="text" placeholder='email' name="email" className='input' value={form.email} onChange={handleChange} />
              </div>
              <textarea placeholder='message' className='textarea' name="message" value={form.message} onChange={handleChange} />
              <button className='btn  rounded-full border border-white/50 max-w-[170px] px-4 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
                <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let's Talk</span>
                <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
              </button >
            </form>

          </div>
        </div>
      </div>
    </motion.div>


















    // <div className='xl:mt-12 flex justify-center overflow-hidden'>
    //   <motion.div
    //     variants={slideIn('left', 'tween', 0.2, 1)}
    //     className='w-full sm:w-[60%] bg-black-100 p-8 rounded-2xl'
    //   >
    //     <p className='text-white font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Contact.</p>


    //     <form ref={formRef}
    //       onSubmit={handleSubmit}
    //       className="mt-12 flex flex-col gap-8"
    //     >
    //       <label className='flex flex-col'>
    //         <span className='text-white font-medium mb-4'>
    //           Name
    //         </span>
    //         <input type="text" name="name" value={form.name} onChange={handleChange}
    //           placeholder="Enter your name"
    //           className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
    //       </label>

    //       <label className='flex flex-col'>
    //         <span className='text-white font-medium mb-4'>
    //           Email
    //         </span>
    //         <input type="text" name="email" value={form.email} onChange={handleChange}
    //           placeholder="Enter your email"
    //           className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
    //       </label>

    //       <label className='flex flex-col'>
    //         <span className='text-white font-medium mb-4'>
    //           Message
    //         </span>
    //         <textarea rows="7" name="message" value={form.message} onChange={handleChange}
    //           placeholder="Enter your message"
    //           className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
    //       </label>

    //       <button type="submit"
    //         className='bg-tertiary my-3 outline-none w-fit px-6 py-2 text-white font-bold shadow-md shadow-primary rounded-xl'
    //       >
    //         {loading ? 'Sending ...' : 'Send'}
    //       </button>
    //     </form>
    //   </motion.div>

    //   {/* <motion.div
    //     variants={slideIn('right', 'tween', 0.2, 1)}
    //     className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
    //   >
    //     <EarthCanvas />
    //   </motion.div> */}

    // </div>
  )
}

const Contact = () => {

  return (
    <div className="relative z-0">
      <ContactForm />
      <StarsCanvas />
    </div>
  )
}

export default SectionWrapper(Contact, "contact");