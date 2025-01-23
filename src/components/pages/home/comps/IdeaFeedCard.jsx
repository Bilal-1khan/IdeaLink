import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import {PostDropDown} from "../../../index"


const IdeaFeedCard = () => {

  return (
    <>
      <div
        className={`bg-[#272727] w-[31.25rem] rounded-xl cursor-default transition-all max-md:w-[36rem] max-sm:w-full`}
      >
        <div className="topSection flex items-center gap-5 p-3">
          <div className="w-[2.625rem] h-[2.625rem] rounded-full border-2 border-[#58dddd] overflow-hidden">
            <img
              src="images/profile1.png"
              alt="image"
              className="w-full rounded-full"
            />
          </div>
          <div className="capitalize text-white">
            <p>ali ahmed</p>
          </div>
          <div className="flex-1 text-end relative text-white">
            <PostDropDown/>

          </div>
        </div>

        <div className="w-full h-[25rem]">
          <img
            src="images/comp1.png"
            alt=""
            className="w-full h-full max-sm:h-full"
          />
        </div>

        <div className="flex flex-col">
          <p className="text-sm text-white px-2 py-3 flex-1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam,
            cum! Odit asperiores recusandae eum non? Quis ducimus porro neque
            corrupti.
          </p>
          <div className="btns p-3 flex gap-2 text-white">
            <button>
              <FavoriteIcon />
            </button>
            <button>
              <ChatBubbleOutlineIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IdeaFeedCard;
