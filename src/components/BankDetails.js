

import React from 'react'

function BankDetails() {
  return (
    <div className='w-[77.5%] space-y-4 px-10 py-4 pt-14'>
        <h1 className='text-3xl font-semibold'>Update Bank Details</h1>
        <p className='px-2'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
             totam rem aperiam,eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
             dicta sunt explicabo.
        </p>
        <form className='px-4 flex  flex-col gap-x-4 space-y-4 py-2 border-[1px] rounded-md border-[#D3D3D3]'>
            <div className='flex  items-center'>
                <p className='font-bold w-96'>ACCOUNT HOLDER NAME</p>
                <input type={'text'} className="border-[1px] rounded-[4px] border-[#D3D3D3] outline-none px-2 py-1 w-96"  placeholder="Account Holder Name" required></input>
            </div>
            <div className='flex'>
                <p className='font-bold w-96'>ACCOUNT NUMBER</p>
                <input type={'text'} className="border-[1px] rounded-[4px] border-[#D3D3D3] outline-none px-2 py-[2px] w-96" 
                 placeholder="Account Number" required></input>
            </div> <div className='flex'>
                <p className='font-bold w-96'>IFSC CODE</p>
                <input type={'text'} className="border-[1px] rounded-[4px] border-[#D3D3D3] outline-none px-2 py-[2px] w-96"  
                placeholder="IFSC Code" required></input>
            </div> <div className='flex'>
                <p className='font-bold w-96'>BANK NAME</p>
                <input type={'text'} className="border-[1px] rounded-[4px] border-[#D3D3D3] outline-none px-2 py-[2px] w-96" 
                 placeholder="Bank Name" required></input>
            </div> <div className='flex'>
                <p className='font-bold w-96'>BANK CITY</p>
                <input type={'text'} className="border-[1px] rounded-[4px] border-[#D3D3D3] outline-none px-2 py-[2px] w-96" 
                 placeholder="Bank City" required></input>
            </div> <div className='flex'>
                <p className='font-bold w-96'>BRANCH NAME</p>
                <input type={'text'} className="border-[1px] rounded-[4px] border-[#D3D3D3] outline-none px-2 py-[2px] w-96" 
                 placeholder="Branch Name" required></input>
            </div>
            <div className='flex'>
                <p className='font-bold w-96'>RELATION WITH ACCOUNT HOLDER</p>
                <input type={'text'} className="border-[1px] rounded-[4px] border-[#D3D3D3] outline-none px-2 py-[2px] w-96"  
                placeholder="Relation with Account Holder" required></input>
            </div>
            <div className='flex'>
                <p className='font-bold w-96'>CONSENT</p>
                <div className='w-96 flex px-2 py-2 rounded-[4px] space-x-2 border-[1px] border-[#D3D3D3]  '>
                    <input className='mb-8 w-10 h-10' type={'checkbox'} required></input>
                    <p className='text-sm'>I confirm that the information given in this form is true, complete and accurate.
                         I understand that in case of incorrect details, 
                         Exambazaar will not be responsible for any loss of pay.</p>
                </div>
            </div>
            <button className='bg-[#3AA078] w-28 h-14 text-white border-none font-semibold rounded-md' > Save</button>
        </form>
        <p className='border-b-[1px] text-center py-8 border-[#D3D3D3]'>THE ABOVE DETAILS ARE FINAL AND WILL BE USED FOR PAYMENT. IF ANY OF THESE DETAILS ARE WRONG, 
            PLEASE CONTACT YOUR MANAGER IMMEDIATELY! ALSO EMAIL THE SAME TO ACCOUNTS@EXAMBAZAAR.COM!
        </p>
    </div>
  )
}

export default BankDetails