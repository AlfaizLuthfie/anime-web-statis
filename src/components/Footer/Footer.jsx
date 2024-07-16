import React from 'react'
import IconNavbar from '../Navbar/IconNavbar'

function Footer () {
  return (
    <div className="bg-slate-900 flex items-center flex-col py-5">

        <IconNavbar></IconNavbar>
        <p className='text-white mt-2 font-medium text-sm'>2024 - All Rights Reserved</p>
        <p className='text-white mt-2 font-medium text-sm'>@AlfaizLuthfie</p>
    </div>
  )
}

export default Footer;
