import React, { useState } from "react";
import { IconSection, MenuList, Button, DropDown } from "./../../components";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

const Navbar = () => {
  // const authStatus = useSelector((state) => state.status); // state.auth.status this code will added
  const authStatus = useSelector((state) => state.authReducer.status);
  const navigate = useNavigate()
  const navItems = [
    {
      name:"Home",
      id: nanoid(),
      urlPath:"/home",
      active:true
    },
    {
      name:"People Idea's",
      id: nanoid(),
      urlPath:"/people-idea",
      active:true
    },
    {
      name:"investor's",
      id: nanoid(),
      urlPath:"/investor",
      active:true
    },
    {
      name:"Login",
      id: nanoid(),
      urlPath:"",
      active:!authStatus
    },
    {
      name:"Signup",
      id: nanoid(),
      urlPath:"/signup",
      active:!authStatus
    },
  ]

  return (
    <>
      <header className=" bg-[#272727]">
        <div className="max-w-[1240px] mx-auto">
          <nav className="flex justify-between items-center py-4 px-2 bg-[#272727] ">
            <IconSection />
            <div className="mr-4 max-sm:hidden">
              <ul className="flex items-center gap-4">
                {
                  navItems.map((items)=>items.active ? (
                    <li key={items.id}>
                      <button 
                      onClick={()=>navigate(items.urlPath)}
                      className="text-[1.1rem] hover:text-[#58dddd] text-white"
                      >{items.name}</button>
                    </li>
                  ) :null)
                }
              </ul>
            </div>
            {/* <MenuList /> */}
            {
              authStatus && (
                <li className="list-none">
                  <Button />
                </li>
              )
            }
            <DropDown />
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
