import React,{useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router-dom";


const DropDown = () => {
    const [isDropDown,setIsDropDown] = useState(false)
  return (
    <>
    <div 
    onClick={()=>setIsDropDown(!isDropDown)}
    className="relative cursor-pointer max-sm:block hidden">
     <MenuIcon sx={{color:"#fff"}}/>
     <div className={`${isDropDown? "block": 'hidden' } dropDownList absolute w-[9.5rem] rounded-xl top-7 right-1 bg-white px-3 py-4`}>
       <ul >
         <li className="hover:bg-[#272727] hover:text-white text-black rounded-xl px-3 py-2">
         <NavLink to='/'
         className={({isActive})=>{`${isActive ? "text-[#58dddd]" : 'text-white'}`}}
         >Home</NavLink>
         </li>
         <li className="hover:bg-[#272727] hover:text-white text-black rounded-xl px-3 py-2">
         <NavLink 
         className={({isActive})=>{`${isActive ? "text-[#58dddd]" : 'text-white'}`}}
         to='/people-idea'>People Idea's</NavLink>
         </li>
         <li className="hover:bg-[#272727] hover:text-white text-black rounded-xl px-3 py-2">
         <NavLink 
         className={({isActive})=>{`${isActive ? "text-[#58dddd]" : 'text-white'}`}}
         to='/investor'>Investor</NavLink>
         </li>
         <li className="hover:bg-[#272727] hover:text-white text-black rounded-xl px-3 py-2">
         <p>Logout</p>
         </li>
       </ul>
     </div>
   </div>
   </>
  )
}

export default DropDown