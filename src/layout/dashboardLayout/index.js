import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

export default function Dashboardlayout({children}) {
  return (
    <div className='flex flex-col h-screen'>
        <Header />
        <div className='flex flex-1'>
            <Sidebar />
            <main className='w-full h-full'>{children}</main>
        </div>
    </div>
  )
}
