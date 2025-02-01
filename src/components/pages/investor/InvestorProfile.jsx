import React, { useState } from 'react'
import {Container,IdeaFeedCard, InvestorForm} from "../../index"
import investor from "../../JSON Files/InvestorCard.json"

const InvestorProfile = (card) => {
  const [investorCard,setInvestorCard] = useState(investor)
  console.log(card);
  console.log(investor);
  
  return (
    <>
      <Container>
        <div className='flex flex-col p-4'>
        <div className="cover w-full h-[200px] rounded-xl my-3">
          <img src='https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="image" className='w-full rounded-xl h-full'/>
        </div>
        <div className='flex gap-2 items-center'>
          <div className="img w-[100px] h-[100px] rounded-full">
            <img src="images/profile1.png" alt="" className='w-full rounded-full border-2 border-[#58dddd]'/>
          </div>
          <div className="right">
            <p className="name text-white font-bold capitalize text-3xl">bilal khan</p>
            <p className="investor text-white">@Investor</p>
          </div>
        </div>

        <div className='flex items-center gap-4 p-3'>
          <InvestorForm/>
        </div>
        </div>
      </Container>
    </>
  )
}

export default InvestorProfile