import React from 'react'
import Button from './UI/Button'
function Access() {
  return (
    <div className=' flex-col md:flex-row max-w-[75rem] mx-auto flex justify-center items-center px-5 md:px-0 py-16 text-white'>    

        <div className="text-center md:text-left">
            <p className='text-2xl font-[700]'>  Get early access today</p>
            <p className='py-4 md:w-2/3 text-md'>  It only takes a minute to sign up and our free starter tier is extremely generous. 
  If you have any questions, our support team would be happy to help you.</p>
        </div>
        <div className="form text-center md:text-left md:w-2/3 w-full">
            <form action="" className='flex flex-col   space-y-2 md:space-y-2  '>
                <input type="email" required className='md:flex-1 border border-1 border-gray-300 py-1'/>
                <div className="btn w-full" ><Button> Get Started For Free </Button></div>
            </form>
        </div>


    </div>
  )
}

export default Access