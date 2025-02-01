import React from 'react'

export default function UserProfile({width,maxWidth,smWidth}) {
  return (
    <>
     <div className={`bg-[#272727] p-5 rounded-xl leading-[3.125rem] max-md:w-[${maxWidth}] max-sm:w-${smWidth}`}>
            <div className='w-[4.375rem] rounded-[100%] border-white border-2 text-lg'>
              <img src="./images/profile1.png" className='w-full' alt="" />
            </div>
            <p className='text-lg capitalize'>user name</p>
            {/* <p className='text-[1.1rem] capitalize'>skills</p>
            <p className='text-[1.1rem] capitalize'>city</p> */}
          </div> 
    </>
  )
}
