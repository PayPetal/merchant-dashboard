import React from 'react'

//we are going to pass anything it wraps has a child prop 
export default function Authlayout({children}) {
  return (
    <div className='bg-bg-img h-screen  bg-no-repeat bg-cover bg-link-a  overflow-hidden'>
        {children}
    </div>
  )
}
