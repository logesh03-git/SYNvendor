import React from "react";

const StatsCard = ({ title, value, imageUrl: Icon}) => {
  return (
    <div className="w-[14.625rem] h-[6.125rem] p-[15px] bg-white rounded-[0.9375rem] border border-[#c1c1c1] flex justify-center items-center gap-[1.25rem]">
      <div className="w-[3rem] h-[3rem] relative flex flex-col justify-start items-start">
      {Icon && <Icon className="w-12 h-12" />}
      </div>
      <div className="w-[8.5rem] flex flex-col justify-start items-start">
        <h1 className="text-[#393939] text-lg font-normal leading-7">
          {title}
        </h1>
        <p className="text-[#3b3f44] text-2xl font-semibold font-['Poppins'] leading-[39.09px]">
          {value}
        </p>
      </div>
    </div>
  );
};

export default StatsCard;