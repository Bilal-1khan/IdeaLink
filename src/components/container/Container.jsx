import React from 'react'

const Container = ({children}) => {
  return (
    <>
    <div className='w-full h-full bg-[#1f1e1e]'>
        <div className='max-w-[1240px] mx-auto'>
        {children}
        </div>
    </div>
    </>
  )
}

export default Container