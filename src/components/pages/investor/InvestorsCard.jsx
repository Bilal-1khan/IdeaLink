import React, { useState } from "react";
import {NavLink, useNavigate } from 'react-router-dom'

export default function InvestorsCard(
  { id,BgImg, Name, profile, headLine,card }
) 

{
  const navigate = useNavigate('')
  const [cardId,setCardId ] = useState(id)

  function ViewInvestor() {

    if (id === card.id) {
      console.log(`working`);
      console.log(card.InvesterName);
      navigate('/investor-user')
    }
  }
  return (
    <>
      <div className="rounded-xl bg-[#272727] flex flex-col gap-2">
        <div className="relative flex">
          <div className="rounded-t-xl w-full h-[12.5rem] bg-black opacity-60 max-sm:h-full">
            <img
              src={BgImg}
              alt="image"
              className="rounded-t-xl w-full h-full"
            />
          </div>
          <div className="absoluteDiv flex gap-6 items-center absolute bottom-[1rem] left-4">
            <div className="w-[2.625rem] h-[2.625rem] rounded-2xl bg-black overflow-hidden">
              <img src={profile} alt="image" className="w-full" />
            </div>
            <div className="name capitalize">
              <p>{Name}</p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-4 flex flex-col">
          <div className="headLine flex-1">
            <p>{headLine}</p>
          </div>
          <div>
            <button onClick={ViewInvestor} className="py-2 bg-[#444] text-white rounded-full mt-3 cursor-pointer w-full">
              <NavLink>View</NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
