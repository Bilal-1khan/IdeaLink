import React from "react";
import {IconSection,MenuList,Button,DropDown} from './../../components'

const Navbar = () => {

  return (
    <>
      <header className=" bg-[#272727]">
        <div className="max-w-[1240px] mx-auto">

        <nav className="flex justify-between items-center py-4 px-2 bg-[#272727] ">
          <IconSection />
          <MenuList />
          <Button />
          <DropDown/>          
        </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
