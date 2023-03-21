import React from 'react'
import leftArrow from '../images/left-arrow.png';
import dashboardIcon from '../images/dashboard-icon.png';
import linkIcon from '../images/link-icon.png';
import summaryIcon from '../images/paper-icon.png';
import bankIcon from '../images/bank-icon.png';
// import userIcon from '../images/user_icon.png';
import chevron from '../images/chevron.png'



function Aside() {
  return (
    <div className='flex flex-col gap-y-6  py-4 w-[21.5%]  px-6 border-r-[1px] border-[#D3D3D3]'>
        <div>
            <img alt='' className='h-6 w-6' src={leftArrow}></img>
        </div>
        <div className='flex flex-col gap-y-8 items-center'>
            <div className='flex space-x-12'>
                <div className='flex space-x-4'>
                <img alt='' className='h-6 w-6' src={dashboardIcon}></img>
                <p>My Dashboard</p>
                </div>
                <img alt='' className='h-6 w-6' src={chevron}></img>
            </div>
            <div className='flex space-x-12'>
                <div className='flex space-x-4'>
                <img alt='' className='h-6 w-6 ' src={linkIcon}></img>
                <p className=''>TOTM links</p>
                </div>
                <img alt='' className='h-6 w-6' src={chevron}></img>
            </div>
            <div className='flex space-x-12'>
                <div className='flex space-x-4'>
                <img alt='' className='h-6 w-6' src={summaryIcon}></img>
                <p>Daily Summary</p>
                </div>
                <img alt='' className='h-6 w-6' src={chevron}></img>
            </div>
            <div className='flex bg-[#ECEAEA] px-2 py-3 rounded-md space-x-12'>
                <div className='flex space-x-4'>
                <img alt='' className='h-6 w-6' src={bankIcon}></img>
                <p>Bank Details</p>
                </div>
                <img alt='' className='h-6 w-6' src={chevron}></img>
            </div>
        </div>

    </div>
  )
}

export default Aside