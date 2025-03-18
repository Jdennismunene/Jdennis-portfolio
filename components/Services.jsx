import { assets, serviceData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"

function Services() {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id='services' className='w-full px-[12%] py-10 scroll-mt-20'>

      <motion.h4 
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{delay: 0.3, duration: 0.5}}
      className='text-center mb-2 text-lg'>What I offer?</motion.h4>
      
      <motion.h2 
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{delay: 0.5, duration: 0.5}}
      className='text-5xl text-center'>My <span className='underline underline-offset-4 decoration-1 text-gray-500'>Services</span></motion.h2>

      <motion.p 
      initial={{opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{delay: 0.7, duration: 0.5}}
      className='text-center max-w-2xl mx-auto mt-5 mb-12'>
      I am an experienced fronted developer with few fronted design. Am also an upcoming backend developer with a desire of getting to know Next.js and be familiar to merger my frontend designs with the backend.
      </motion.p>

      <motion.div 
      initial={{opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{delay: 0.9, duration: 0.6}}
      className='grid lg:grid-cols-4 md:grid-cols-2 gap-6 my-10'>
        {serviceData.map(({icon, title, description, link}, index) => (
            <motion.div 
            whileHover={{sclae: 1.05}}
            key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:drop-shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#2a004a] hover:-translate-y-1 duration-500 dark:hover:bg-[#2a004a] dar:hover:shadow-white'>
                <Image src={icon} alt='' className='w-10' />
                <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>{description}</p>
                <a href={link} className='flex items-center gap-2 text-sm mt-5'>Read more <Image src={assets.right_arrow} alt='' /></a>
            </motion.div>
        ))}
      </motion.div>

    </motion.div>
  )
}

export default Services
