import React from 'react'

function Button({children}) {
  return (
<button className='bg-brightblue py-2 px-10 rounded-md text-white hover:bg-desaturateblue'>{children}</button> 

)
}

export default Button