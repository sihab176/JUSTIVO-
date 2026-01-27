import React from 'react'
import { IoStarSharp } from "react-icons/io5";

const Marquee = () => {
  return (
      <div className='mb-20 max-w-[1620px] mx-auto'>
          <div className='py-4 px-6 bg-[#F9F2F0] text-4xl flex items-center gap-11'>Since 1987 <span className='text-primary'><IoStarSharp /></span> Thousands of cases won <span className='text-primary'><IoStarSharp /></span>  National Leagal Support <span className='text-primary'><IoStarSharp /></span>  Since 1987</div>
    </div>
  )
}

export default Marquee