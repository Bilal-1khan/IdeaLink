import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const PeopleIdeaCard = ({img,name,ideaImg,idea,maxWidth,smWidth}) => {
  return (
    <>
        <div className={`bg-[#272727] rounded-xl border-transparent border-2 hover:border-[#58dddd] hover:border-2 cursor-pointer transition-all max-md:w-[${maxWidth}] max-sm:w-${smWidth}`}>

          <div className="topSection flex items-center gap-5 p-3">
            <div 
              className="w-[2.625rem] h-[2.625rem] rounded-full border-2 border-[#58dddd] overflow-hidden">
              <img 
              src={img} 
              alt="image" 
              className='w-full rounded-full'/>
            </div>
            <div className="capitalize">
              <p>{name}</p>
            </div>
          </div>

          <div className="">
            <img src={ideaImg} alt="" className='w-full h-[12.5rem] max-sm:h-full'/>
          </div>

          <div className='flex gap-3 flex-col px-2 py-3 '>
            <div className='flex-1'>
          <p className="text-sm ">{idea}</p>
            </div>
          <div className="btns inline-flex gap-2 mt-4]">
            <button><FavoriteIcon/></button>
            <button><ChatBubbleOutlineIcon/></button>
          </div>
          </div>
        </div>
    </>
  )
}

export default PeopleIdeaCard