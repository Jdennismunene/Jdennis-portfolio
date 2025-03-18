import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

function Footer({isDarkMode}) {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2' />

        <div className='flex items-center mx-auto gap-2 w-max'>
        <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' /> dennismunene478@gmail.com
        </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Jdennis Munene. All rights reserved</p>
        <ul className='flex items-center gap-10 justify-between mt-4 sm:mt-0'>
            <li><a target='_blank' href="https://github.com/Jdennismunene">Github</a></li>
            <li><a target='_blank' href="https://github.com/Jdennismunene">Linkedin</a></li>
            <li><a target='_blank' href="https://www.instagram.com/jdenno.m/?hl=en">Instagram</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
