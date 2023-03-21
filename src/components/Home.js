import React from 'react'
import Aside from './Aside'
import BankDetails from './BankDetails'

function Home() {
  return (
    <div className='flex' >
        <Aside/>
        <BankDetails/>
    </div>
  )
}

export default Home