import React from 'react'

import searchIcon from '../images/search_icon.png'
import notificationIcon from '../images/notification_icon.png';
import userIcon from '../images/user_icon.png';

function Navbar() {
  return (
    <div className='flex h-16 border-[1px] font-[Open Sans] px-4 border-[#D3D3D3] justify-between items-center'>
        <div className='font-bold text-lg text-[#262626]'>
            Logo
        </div>
        <div className='flex h-16 items-center space-x-24'>
            <div  className='font-bold h-16 flex items-center border-b-4 px-4 border-[#3AA078] text-lg   text-[#262626]'>
                Home
            </div>
            <div className='font-bold text-lg  px-4 text-[#262626]'>
                Services
            </div>
            <div className='font-bold text-lg  px-4  text-[#262626]'>
                Blog
            </div>
            <div className='font-bold  text-lg px-4 text-[#262626]'>
                Offers
            </div>
            <div className='font-bold text-lg  px-4 text-[#262626]'>
                About Us
            </div>
        </div>
        <div className='flex space-x-10'>
           <img className='w-6 h-6' alt='' src={searchIcon}></img>
           <img className='w-6 h-6' alt='' src={notificationIcon}></img>
           <img className='w-6 h-6' alt='' src={userIcon}></img>
        </div>
    </div>
  )
}

export default Navbar