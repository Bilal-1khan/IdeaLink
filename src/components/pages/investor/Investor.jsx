import React from 'react'
import {UserProfile,InvestorContent} from '../../../components/index'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

const Investor = () => {
  
  return (
    <div className="w-full h-full bg-[#1f1e1e]">
        <div className="max-w-[1240px] m-auto">
          <div className="flex text-white gap-5 justify-center p-6 max-md:flex-col max-md:items-center">
            <div className="sideBar w-[34.25rem] flex flex-col gap-3 max-sm:w-full max-md:w-full">
              <UserProfile maxWidth={"100%"} smWidth={"full"} />
              <button className="inline-block bg-white w-full px-4 py-2 text-[#1f1e1e] capitalize font-bold rounded-3xl max-md:w-full max-md:mx-auto">
                professional help <OpenInNewIcon />
              </button>
            </div>

            <div className="gap-2 grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:w-full">
              <InvestorContent/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Investor