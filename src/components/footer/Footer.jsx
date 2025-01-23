import React, { useState } from 'react'

const Footer = () => {
  const [year,setYear] = useState(new Date().getFullYear())

  return (
    <>
    <div className='w-full p-8 bg-[#1f1e1e]'>
      <div className=''>
    <div className='font-bold text-white tracking-wide cursor-default'>Copyrights © {year} by Idea<span className='text-[#58dddd]'>Link</span> | All Rights Reserved.
    </div>
      </div>
    </div>
    </>
  )
}

export default Footer