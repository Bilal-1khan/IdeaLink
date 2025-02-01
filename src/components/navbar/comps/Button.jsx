import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../../appwrite/auth'
import {logout} from "../../../store/authSlice"

const Button = () => {
  const dispatch = useDispatch()

  function logoutHandler() {
    authService.userLogout()
    .then((user)=>{
      console.log(user);
      dispatch(logout())
    })
    .catch((error)=>{
      throw error
    })
    console.log(authService.userLogout);
    
  }
  return (
    <>
        <button onClick={logoutHandler} className='px-5 py-2 text-[#58dddd] uppercase rounded-xl text-[0.8rem] border-[#58dddd] border-[1px] max-sm:hidden'>
            logout
        </button>
    </>
  )
}

export default Button