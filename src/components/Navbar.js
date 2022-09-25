import React from 'react'
import logo from '../images/logo.svg'
function Navbar() {
  return (
    <header className='flex justify-between items-center pt-6 px-6 md:pt-14 '>
        <img src={logo} alt="" className='w-28 md:w-32' />
        <ul className='flex space-x-5 md:space-x-16 font-[700] text-sm text-desaturateblue'>
            <li><a href="" className=''>Features</a> </li>
            <li><a href="">Team</a> </li>
            <li><a href="">Sign in</a> </li>
        </ul>

    </header>
  )
}

export default Navbar