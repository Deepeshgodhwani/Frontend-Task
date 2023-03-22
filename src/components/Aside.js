import React from "react";
import leftArrow from "../images/left-arrow.png";
import dashboardIcon from "../images/dashboard-icon.png";
import linkIcon from "../images/link-icon.png";
import summaryIcon from "../images/paper-icon.png";
import bankIcon from "../images/bank-icon.png";
import chevron from "../images/chevron.png";

function Aside() {
  return (
    <div className=" flex-col gap-y-6 hidden lg:flex  xl:w-[25%] py-4  px-6 border-r-[1px] border-[#D3D3D3]">
      <div>
        <img alt="" className="h-6 w-6" src={leftArrow}></img>
      </div>
      <div className="flex flex-col gap-y-8 items-center">
        <div className="flex px-2">
          <div className="flex ">
            <img alt="" className="h-6 w-6" src={dashboardIcon}></img>
            <p className="w-60 px-4 ">My Dashboard</p>
          </div>
          <img alt="" className="h-6 w-6" src={chevron}></img>
        </div>
        <div className="flex px-2">
          <div className="flex">
            <img alt="" className="h-6 w-6 " src={linkIcon}></img>
            <p className="w-60 px-4 ">TOTM links</p>
          </div>
          <img alt="" className="h-6 w-6" src={chevron}></img>
        </div>
        <div className="flex px-2">
          <div className="flex ">
            <img alt="" className="h-7 -ml-1 w-7" src={summaryIcon}></img>
            <p className="w-60 px-4 ">Daily Summary</p>
          </div>
          <img alt="" className="h-6 w-6" src={chevron}></img>
        </div>
        <div className="flex bg-[#ECEAEA] px-2 py-3 rounded-md ">
          <div className="flex ">
            <img alt="" className="h-6 w-6" src={bankIcon}></img>
            <p className="w-60 px-4 ">Bank Details</p>
          </div>
          <img alt="" className="h-6 w-6" src={chevron}></img>
        </div>
      </div>
    </div>
  );
}

export default Aside;
