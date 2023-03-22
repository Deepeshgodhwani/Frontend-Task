import React from "react";

import searchIcon from "../images/search_icon.png";
import notificationIcon from "../images/notification_icon.png";
import userIcon from "../images/user_icon.png";
import menuBarIcon from "../images/menu-bar.png";
import leftArrow from "../images/left-arrow.png";

// To open menu drawer
const openDrawer = () => {
  //fetching drawer , bankdetail form , menuicon and backIcon //
  let drawer = document.getElementById("drawer");
  let bankDetailForm = document.getElementById("bankDetailForm");
  let menuIcon = document.getElementById("menuIcon");
  let leftIcon = document.getElementById("backIcon");
  //sliding menu and hidding bankDetailForm //
  drawer.style.right = "0";
  menuIcon.style.display = "none";
  leftIcon.style.display = "block";
  bankDetailForm.style.display = "none";
};

//To close menu drawer //
const closeDrawer = () => {
  let drawer = document.getElementById("drawer");
  let menuIcon = document.getElementById("menuIcon");
  let leftIcon = document.getElementById("backIcon");
  let bankDetailForm = document.getElementById("bankDetailForm");

  //hidding menudrawer and enabling bank detailform
  bankDetailForm.style.display = "block";
  drawer.style.right = "100%";
  menuIcon.style.display = "block";
  leftIcon.style.display = "none";
};

//Handling menu drawer while resizing window
window.addEventListener("resize", () => {
  let menuIcon = document.getElementById("menuIcon");
  let leftIcon = document.getElementById("backIcon");

  // if windowsize goes more than 1023 pixel then 
  //close drawer and hide menu and backIcon
  if (window.innerWidth > 1023) {
    closeDrawer();
    menuIcon.style.display = "none";
    leftIcon.style.display = "none";
  } else {
    // if window size is below 1023 and drawer is notOpen then show menuIcon 
    if (leftIcon.style.display !== "block") {
      menuIcon.style.display = "block";
    }
  }
});

function Navbar() {
  return (
    <div className=" h-16 lg:border-[1px] border-2 flex font-[Open Sans] px-6 border-[#D3D3D3] justify-between items-center">
      <img
        onClick={openDrawer}
        alt=""
        src={menuBarIcon}
        id="menuIcon"
        className="w-7 cursor-pointer lg:hidden h-7"
      ></img>
      <img
        onClick={closeDrawer}
        id="backIcon"
        alt=""
        className="h-6 hidden cursor-pointer lg:hidden w-6"
        src={leftArrow}
      ></img>
      <div className="font-bold hidden lg:flex text-lg text-[#262626]">
        Logo
      </div>
      <div className="h-16 hidden lg:flex items-center pl-8 space-x-12 xl:space-x-24">
        <div className="font-bold h-16 flex items-center border-b-4 px-4 border-[#3AA078] text-lg   text-[#262626]">
          Home
        </div>
        <div className="font-bold text-lg  px-4 text-[#262626]">Services</div>
        <div className="font-bold text-lg  px-4  text-[#262626]">Blog</div>
        <div className="font-bold  text-lg px-4 text-[#262626]">Offers</div>
        <div className="font-bold text-lg  px-4 text-[#262626]">About Us</div>
      </div>
      <div className=" hidden lg:flex space-x-10">
        <img className="w-6 h-6" alt="" src={searchIcon}></img>
        <img className="w-6 h-6" alt="" src={notificationIcon}></img>
        <img className="w-6 h-6" alt="" src={userIcon}></img>
      </div>
    </div>
  );
}

export default Navbar;
