
import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { useState } from "react";


export default function Login() {
  const [icon, setIcon] = useState(false);
  const [type, setType] = useState('password');
  const handleToggle = () => {
    if (type === 'password') {
      setIcon(true);
      setType('text')
    } else {
      setIcon(false)
      setType('password')
    }
  }
  return (
    <form action="" className='flex flex-col xl:w-4/12 lg:w-6/12 md:w-8/12 sm:w-10/12 w-10/12 gap-4 p-6  lg:p-10 rounded-3xl my-20 text-center bg-white '>
      <div className='flex flex-col  items-center gap-4'>
        <div className='flex flex-col lg:px-4'>
          <h4 className='xl:text-2xl lg:text-1xl md:text-xl sm:text-lg  text-sm font-medium'>Login to Manage your Transactions</h4>
          <h4 className='xl:text-2xl lg:text-1xl md:text-xl sm:text-lg  text-sm font-medium'>Easily on Paypetal</h4>
        </div>

        <div className='flex flex-row gap-2'>
          <p className='text-sm font-light'> Don’t an Account?
          </p>
          <Link to="/register" className='text-link-a  text-sm' >Sign Up here</Link >
        </div>

      </div>


       
        <div className="bg-white py-2 rounded-lg">
          <div className="relative bg-inherit">
            <input type="email" id="Email" name="Email" className="peer bg-transparent h-12 w-full rounded-lg text-gray-700 dark:text-white placeholder-transparent ring-2 px-2 ring-gray-200 dark:ring-white focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Email" />
            <label htmlFor="Email" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 py-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Email</label>
          </div>
        </div>

        <div className="bg-white py-2 rounded-lg">
          <div className="relative bg-inherit">
            <div className='right-2 absolute text-2xl top-3 text-gray-400'>
              {icon ?
                <FaRegEye onClick={handleToggle} />
                :
                <FaRegEyeSlash onClick={handleToggle} />
              }
            </div>
            <input type={type} id="Password" name="Password" className="peer bg-transparent h-12 w-full rounded-lg text-gray-700 dark:text-white placeholder-transparent ring-2 px-2 ring-gray-200 dark:ring-white focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Password" />

            <label htmlFor="Password" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 py-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Password</label>

          </div>

         
      </div>
      <Link className='flex items-start text-btn-color font-medium'>Forgot Your Password?</Link>
      <button className='rounded-full py-4  bg-btn-color text-white hover:bg-btn-hover'> Login</button>
    </form>
  )
}
