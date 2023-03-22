import React from 'react'

import dashboardIcon from '../images/dashboard-icon.png';
import linkIcon from '../images/link-icon.png';
import summaryIcon from '../images/paper-icon.png';
import bankIcon from '../images/bank-icon.png';
import chevron from '../images/chevron.png'

function AsideDrawer() {
  return (
    <div id='drawer' className='w-full flex absolute right-full duration-100 ease-in-out flex-col gap-y-6 py-4  px-6 bg-white h-full'>
        <div className='flex flex-col  gap-y-3'>
            <div className='flex px-2 justify-between py-3 border-b-[1px] border-[#D3D3D3]'>
                <div className='flex '>
                <img alt='' className='h-6 w-6' src={dashboardIcon}></img>
                <p className='w-48 px-4 '>My Dashboard</p>
                </div>
                <img alt='' className='h-6 w-6' src={chevron}></img>
            </div>
            <div className='flex px-2 justify-between py-3 border-b-[1px] border-[#D3D3D3]'>
                <div className='flex'>
                <img alt='' className='h-6 w-6 ' src={linkIcon}></img>
                <p className='w-48 px-4 '>TOTM links</p>
                </div>
                <img alt='' className='h-6 w-6' src={chevron}></img>
            </div>
            <div className='flex px-2 justify-between py-3 border-b-[1px] border-[#D3D3D3]'>
                <div className='flex '>
                <img alt='' className='h-7 -ml-1 w-7' src={summaryIcon}></img>
                <p className='w-48 px-4 '>Daily Summary</p>
                </div>
                <img alt='' className='h-6 w-6' src={chevron}></img>
            </div>
            <div className='flex  px-2 justify-between py-3 border-b-[1px] border-[#D3D3D3] '>
                <div className='flex '>
                <img alt='' className='h-6 w-6' src={bankIcon}></img>
                <p className='w-48 px-4 '>Bank Details</p>
                </div>
                <img alt='' className='h-6 w-6' src={chevron}></img>
            </div>
        </div>
    </div>
  )
}

export default AsideDrawer