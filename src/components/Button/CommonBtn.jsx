import React from "react";

const CommonBtn = ({
  childern,
  type = "button",
  bgColor = "bg-[#272727]",
  textColor = "text-white",
  className = "",
  ...props
}) => {
  return (
    <>
      <button
        className={`${bgColor} ${textColor} capitalize font-bold px-4 rounded-xl cursor-pointer py-2 ${className}`}
        {...props}
      >
        {childern}
      </button>
    </>
  );
};

export default CommonBtn;
