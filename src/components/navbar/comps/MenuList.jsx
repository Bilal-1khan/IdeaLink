import React from 'react'
import {NavLink } from 'react-router-dom'

const MenuList = () => {
  
  return (
    <>
    <div className='mr-4 max-sm:hidden'>
            <ul className='flex items-center gap-4'>
                <NavLink to='/'
                className={({isActive})=>`${isActive ? "text-[#58dddd]" : "text-white"} text-xl`}
                >Home</NavLink>
                <NavLink to='/people-idea'
                className={({isActive})=>`${isActive ? "text-[#58dddd]" : "text-white"} text-xl`}
                >People Idea's</NavLink>
                <NavLink to='/investor'
                className={({isActive})=>`${isActive ? "text-[#58dddd]" : "text-white"} text-xl`}
                >Investor's</NavLink>

            </ul>
        </div>
    </>
  )
}

export default MenuList