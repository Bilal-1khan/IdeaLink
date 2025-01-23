import React from "react";
import LightbulbCircleOutlinedIcon from "@mui/icons-material/LightbulbCircleOutlined";
import { Link} from 'react-router-dom'

const iconStyle = {
  fontSize: "1.8rem",
  color:"#58dddd"
};

const IconSection = () => {
  return (
    <>
      <div className="logo flex-1">
        <Link
          to="/"
          className="flex items-center text-2xl font-bold"
        >
          <LightbulbCircleOutlinedIcon style={iconStyle} />
          <span className="tracking-[.4rem] uppercase ml-1"><span className="text-[#DDDDDD]">Idea</span><span className="text-[#58dddd]">Link</span></span>
        </Link>
      </div>
    </>
  );
};

export default IconSection;
