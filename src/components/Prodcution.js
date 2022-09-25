import React from 'react'
import hero from '../images/illustration-2.svg'
import {AiFillQuestionCircle} from 'react-icons/ai'
import quote from '../images/icon-quotes.svg'
import avatar from '../images/avatar-testimonial.jpg'

function Prodcution() {
  return (
         <section className='prodcution flex flex-col-reverse md:flex-row  md:flex items-center  px-5 md:px-0 py-10 gap-10 max-w-[75rem] mx-auto'>
    
    <div className="text self-start">
        <p className='font-[700] text-3xl'>  Stay productive, wherever you are</p>
        <p className='py-6 font-[700] text-gray-700'>  Never let location be an issue when accessing your files. Fylo has you 
  covered for all of your file storage needs.</p>
  <p className='py-2 font-[700] text-gray-700'>   Securely share files and folders with friends, family and colleagues for 
  live collaboration. No email attachments required!</p>

  <p className='text-moderatecyan flex items-center underline'> See how Fylo works <AiFillQuestionCircle className='ml-2'/></p>
       
       <div className="card bg-white p-4 rounded-md shadow-lg my-5 md:max-w-[24rem]">
        <img src={quote} alt="" className='py-2'/>
        <p className='font-[700] text-gray-700'>  Fylo has improved our team productivity by an order of magnitude. Since 
  making the switch our team has become a well-oiled collaboration machine.</p>
  <div className="avatar flex space-x-2 items-center py-4">
    <img src={avatar} alt="" className='rounded-full w-10' />
    <div className="text">
    <p className='font-[700]'> Kyle Burton</p>
    <p className='text-gray-600 font-semibold text-xs'>  Founder CEO, Huddle</p>
    </div>
  </div>
       </div>

    </div>
    <img src={hero} alt="" className='md:w-1/2 '/>


</section>
  )
}

export default Prodcution