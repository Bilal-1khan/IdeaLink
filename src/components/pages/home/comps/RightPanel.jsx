import React from 'react'
import Companies from "../../../JSON Files/Companies.json"
import SendIcon from '@mui/icons-material/Send';

function RightPanel() {
  return (
    <>
     <div className="rightPanel h-full bg-[#272727] p-6 rounded-xl max-lg:hidden">
            <h1 className="font-bold mb-4 capitalize text-white text-sm">
              Deliever idea to Companie's
            </h1>
            {
              Companies.map((Items,index)=>(
                <div key={index} className="flex justify-between gap-4 mb-2">
              <div className="w-[3.125rem] rounded-full">
                <img src={Items.img} className="w-full h-[3.125rem] rounded-full" alt="image" />
              </div>  
              <div className="flex-1 ">
                <div className="heading text-white">{Items.name}</div>
                <p className="description text-sm text-gray-500">{Items.FirmType}</p>
                <button 
                className="send-btn bg-white text-[#272727] px-8 py-2 font-bold text-sm mt-2 rounded-xl">
                  <SendIcon/>
                </button>
              </div>
            </div>
              ))
            }
          </div> 
    </>
  )
}

export default RightPanel
