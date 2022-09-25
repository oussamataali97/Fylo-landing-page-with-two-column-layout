import React from 'react'
import {FaFacebook,FaInstagram,FaTwitter} from 'react-icons/fa'
import mail from '../images/icon-email.svg'
import phone from '../images/icon-phone.svg'
import logo from '../images/logo.png'

function Footer() {
  return (
    <div className='max-w-[75rem] mx-auto py-16 font-[300] text-[16px] text-lightblue px-8'>
        <img src={logo} alt=""className='w-32'/>
        <div className="column md:flex  justify-between py-5 space-y-9 md:space-y-0 ">
            <div className="phone-mail space-y-2 ">
                <p className='flex items-center '> <img src={phone} alt="" className='mr-3' /> Phone: +1-543-123-4567</p>
                <p className='flex items-center '>  <img src={mail} alt="" className='mr-3'/> example@fylo.com</p>
            </div>
            <div className="about space-y-2">
             <p>About Us</p>
            <p>  Jobs</p>
            <p> Press</p>
            <p>  Blog</p>

                </div>

                <div className="contact space-y-2">
                  <p>Contact Us</p>
                <p>  Terms</p>
                <p>  Privacy</p>



                </div>
                <div className="social md:flex space-x-4 mr-16 justify-center hidden">
                <FaFacebook  size={20}/>
                <FaInstagram size={20}/>
                <FaTwitter size={20}/>
                </div>
        </div>
        <div className="social flex justify-center space-x-6 md:hidden ">
                <FaFacebook size={30}/>
                <FaInstagram size={30}/>
                <FaTwitter size={30}/>
                </div>
       
    </div>
  )
}

export default Footer