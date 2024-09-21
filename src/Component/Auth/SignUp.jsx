import React from 'react'
import { Link } from 'react-router-dom'
import { FaCheck, FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

export default function Signup() {

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
    // <form action="" className='flex flex-col xl:w-6/12 lg:w-8/12 md:w-10/12 sm:w-10/12 w-10/12 gap-4  p-6 rounded-3xl my-20 text-center bg-white '>
    //   <div className='flex flex-col  items-center gap-4'>
    //     <div className='flex flex-col'>
    //       <h4 className='xl:text-2xl lg:text-1xl md:text-xl sm:text-lg  text-sm font-medium'>Sign Up to Accept Payments From Your Customers</h4>
    //       <h4 className='xl:text-2xl lg:text-1xl md:text-xl sm:text-lg  text-sm font-medium'>Easily on Paypetal</h4>
    //     </div>

    //     <div className='flex flex-row gap-2'>
    //       <p className='text-xs lg:text-md font-light'> Already got an Account?
    //       </p>
    //       <Link to="/login" className='text-link-a  text-xs lg:text-md' >Login here</Link >
    //     </div>

    //   </div>

    //   <div className=' grid md:grid-cols-2 grid-cols-1 justify-between  gap-4'>

    //     <div className="bg-white  py-2 rounded-lg">
    //       <div className="relative w-full bg-inherit">
    //         <input type="text" id="Firstname" name="Firstname" className="peer bg-transparent h-12 w-full rounded-lg text-gray-700 dark:text-white placeholder-transparent ring-2 px-2 ring-gray-200 dark:ring-white focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Firstname" />
    //         <label htmlFor="Firstname" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 py-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Firstname</label>
    //       </div>
    //     </div>
    //     <div className="bg-white py-2 rounded-lg">
    //       <div className="relative bg-inherit">
    //         <input type="text" id="Middlename" name="Middlename" className="peer bg-transparent h-12 w-full rounded-lg text-gray-700 dark:text-white placeholder-transparent ring-2 px-2 ring-gray-200 dark:ring-white focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Middlename" />
    //         <label htmlFor="Middlename" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 py-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Middlename</label>
    //       </div>
    //     </div>
    //     <div className="bg-white py-2 rounded-lg">
    //       <div className="relative bg-inherit">
    //         <input type="text" id="Lastname" name="Lastname" className="peer bg-transparent h-12 w-full rounded-lg text-gray-700 dark:text-white placeholder-transparent ring-2 px-2 ring-gray-200 dark:ring-white focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Lastname" />
    //         <label htmlFor="Lastname" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 py-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Lastname</label>
    //       </div>
    //     </div>
    //     <div className="bg-white py-2 rounded-lg">
    //       <div className="relative bg-inherit">
    //         <input type="email" id="Email" name="Email" className="peer bg-transparent h-12 w-full rounded-lg text-gray-700 dark:text-white placeholder-transparent ring-2 px-2 ring-gray-200 dark:ring-white focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Email" />
    //         <label htmlFor="Email" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 py-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Email</label>
    //       </div>
    //     </div>
    //     <div className="bg-white py-2 rounded-lg">
    //       <div className="relative bg-inherit">
    //           <select id="country" name="country" className="peer bg-transparent h-12 w-full rounded-lg text-gray-700 dark:text-white placeholder-transparent ring-2 px-2 ring-gray-200 dark:ring-white focus:ring-sky-600 focus:outline-none focus:border-rose-600">
    //             <option value="">Nigeria</option>
    //             <option value="">Sourt Africa</option>
    //             <option value="">Kenya</option>
    //             <option value="">Ghana</option>
    //           </select>
    //         <label htmlFor="country" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 py-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Country</label>
    //       </div>
    //     </div>

    //     <div className="bg-white py-2 rounded-lg">
    //       <div className="relative bg-inherit">
    //         <div className='left-0 rounded-lg rounded-r-none px-2 absolute text-2xl bg-slate-100 py-3.5 sm:py-2 md:py-3.5 text-gray-400'>
    //             <h4 className='text-sm md:text-md font-light'>+123</h4>
    //         </div>
    //         <input type='text' id="phoneNumber" name="phoneNumber" className="peer bg-transparent h-12 w-full rounded-lg text-gray-700 dark:text-white placeholder-transparent ring-2 px-2 ring-gray-200 dark:ring-white focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Password" />

    //         <label htmlFor="phoneNumber" className="absolute cursor-text left-20 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 py-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all ">Phone Number</label>


    //       </div>
    //     </div>


    //     <div className="bg-white py-2 rounded-lg">
    //       <div className="relative bg-inherit">
    //         <div className='right-2 absolute text-2xl top-3 text-gray-400'>
    //           {icon ?
    //             <FaRegEye onClick={handleToggle} />
    //             :
    //             <FaRegEyeSlash onClick={handleToggle} />
    //           }
    //         </div>
    //         <input type={type} id="Password" name="Password" className="peer bg-transparent h-12 w-full rounded-lg text-gray-700 dark:text-white placeholder-transparent ring-2 px-2 ring-gray-200 dark:ring-white focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Password" />

    //         <label htmlFor="Password" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 py-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Password</label>


    //       </div>
    //     </div>
    //     <div className="bg-white py-2 rounded-lg">
    //       <div className="relative bg-inherit">
    //         <div className='right-2 absolute text-2xl top-3 text-gray-400'>
    //           {icon ?
    //             <FaRegEye onClick={handleToggle} />
    //             :
    //             <FaRegEyeSlash onClick={handleToggle} />
    //           }
    //         </div>
    //         <input type={type} id="confirmPassword" name="confirmPassword" className="peer bg-transparent h-12 w-full rounded-lg text-gray-700 dark:text-white placeholder-transparent ring-2 px-2 ring-gray-200 dark:ring-white focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Password" />

    //         <label htmlFor="confirmPassword" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 py-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Confirm Password</label>


    //       </div>
    //     </div>





    //   </div>
    //   <button className='rounded-full py-4 sm:w-8/12 md:w-4/12 bg-btn-color text-white hover:bg-btn-hover'> Sign Up</button>
    // </form>

    <div className='flex flex-col xl:w-5/12 lg:w-8/12 md:w-10/12 sm:w-10/12 w-10/12 gap-4 items-center  p-6 rounded-3xl my-40  bg-white '>
      <div  className='rounded-full border p-6 bg-checkbox-bg  '>
      <FaCheck color='text-check'/>
      </div>
      
      <h4 className='lg:text-2xl font-medium'>Sign Up Successful</h4>
      <p className='text-md font-normal text-center w-10/12'>Congratulations!!! We noticed you just signed up on paypetal. Please check the next steps below for next steps.</p>
      <div className='flex flex-col gap-1'>
        <h4 className='text-sm font-bold'>Next Steps</h4>
        <hr  className=' border-t-2  border-btn-color'/>
      </div>
      <div className='flex flex-row bg-violet-50 p-4 rounded-lg gap-4'>
      <span className='p-4 bg-violet-200 rounded-full h-2/6'></span>
        <div className='flex flex-col items-start gap-2'>
        <h4 className='text-btn-color text-sm font-medium'>Verify Your Email</h4>
        <p className='text-btn-color text-md font-normal '>We just sent an activation link to the email address you used to sign up here. Go to your email app to click the link in order to activate your account.</p>
        </div>
        <div className='flex items-center'>
        <IoIosArrowForward  className='text-4xl items-center text-violet-200'/>
        </div>
       
      </div>
    </div>
  )
}
