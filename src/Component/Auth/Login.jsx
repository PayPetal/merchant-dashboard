
import React from 'react'
import { Link } from 'react-router-dom'
import { FaCheck, FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { useState } from "react";
import axios from 'axios';
import { IoIosArrowForward } from 'react-icons/io';



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

  // let base_url = window.location.origin;
  // console.log(base_url)

  const [formData, setFormData] = useState (
    {
      // baseUrl: base_url,
      email: "",
      password: ""
    }
  )

  //data from the 
  const [accessToken, setAccessToken] = useState("")
  const [refreshToken, setrefreshToken] = useState("")


  //this handles the changes of the formdata 
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  //state to hold and determine the success
  const [success, setsuccess] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault();
    const body =  {
      email: formData.email,
      password: formData.password
    }
    console.log(body)
    try {

      //create a variable for this 
      const response = await axios.post("https://merchant.paypetalhq.xyz/merchant/auth/login",
       body
      )
      console.log('Login successful:', response.data, setrefreshToken(response.data.refreshToken), setAccessToken(response.data.accessToken)       , setsuccess(true));

    } catch (error) {
      console.error('Login error:', error);
    }

  }
  return (
    <>
    {success ?
      <div className='flex flex-col xl:w-5/12 lg:w-8/12 md:w-10/12 sm:w-10/12 w-10/12 gap-4 items-center  p-6 rounded-3xl my-40  bg-white dark:bg-gray-900 dark:text-white animate-fade-left'>
        <div className='rounded-full border dark:border-none p-6 bg-checkbox-bg dark:bg-green-600 '>
          <FaCheck color='text-check' />
        </div>

        <h4 className='lg:text-2xl font-medium'>Login Successful</h4>
        <p className='text-md font-normal text-center w-10/12'>Congratulations!!! We noticed you just signed up on paypetal. Please check the next steps below for next steps.</p>
        <div className='flex flex-col gap-1'>
          <h4 className='text-sm font-bold'>Next Steps</h4>
          <hr className=' border-t-2  border-btn-color' />
        </div>
        <div className='flex flex-row bg-violet-50 p-4 rounded-lg gap-4'>
          <span className='p-4 bg-violet-200 rounded-full h-2/6'></span>
          <div className='flex flex-col items-start gap-2'>
            <h4 className='text-btn-color text-sm font-medium'>Verify Your Email</h4>
            <p className='text-btn-color text-md font-normal '>We just sent an activation link to the email address you used to sign up here. Go to your email app to click the link in order to activate your account.</p>
          </div>
          <div className='flex items-center'>
            <IoIosArrowForward className='text-4xl items-center text-violet-200' />
          </div>

        </div>
      </div>

      :
    <form action="POST" className='flex flex-col xl:w-4/12 lg:w-6/12 md:w-8/12 sm:w-10/12 w-10/12 gap-4 p-6  lg:p-10 rounded-3xl my-20 text-center bg-white dark:bg-gray-900 dark:text-white ' onSubmit={handleSubmit}>
      <div className='flex flex-col  items-center gap-4'>
        <div className='flex flex-col lg:px-4'>
          <h4 className='xl:text-2xl lg:text-1xl md:text-xl sm:text-lg  text-sm font-medium'>Login to Manage your Transactions</h4>
          <h4 className='xl:text-2xl lg:text-1xl md:text-xl sm:text-lg  text-sm font-medium'>Easily on Paypetal</h4>
        </div>

        <div className='flex flex-row gap-2'>
          <p className='text-sm font-light'> Don’t an Account?
          </p>
          <Link to="/register" className='text-link-a  dark:text-purple-300 text-sm' >Sign Up here</Link >
        </div>

      </div>


       
      <div className="bg-white dark:bg-gray-900  rounded-lg">
              <div className="relative bg-inherit rounded-lg">
                <input
                  type="email"
                  onChange={handleChange}
                  id="email"
                  name="email"
                  autoComplete='username'
                  className="peer bg-transparent h-12 w-full rounded-lg text-gray-700 dark:text-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400   placeholder-transparent ring-2 px-2 ring-gray-200 dark:ring-gray-600 dark:focus:ring-gray-400 focus:ring-sky-600 focus:outline-none focus:border-none" placeholder="Email" />
                <label htmlFor="email" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white bg-inherit rounded-lg mx-1 px-1 py-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 dark:peer-focus:text-gray-300 peer-focus:text-sm transition-all">Email</label>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg">
              <div className="relative bg-inherit rounded-lg">
                <div className='right-2 absolute text-2xl top-3 text-gray-400'>
                  {icon ?
                    <FaRegEye onClick={handleToggle} />
                    :
                    <FaRegEyeSlash onClick={handleToggle} />
                  }
                </div>
                <input
                  type={type}
                  onChange={handleChange}
                  id="password"
                  name="password"
                  autoComplete="new-password"
                  className="peer bg-transparent h-12 w-full rounded-lg text-gray-700 dark:text-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400   placeholder-transparent ring-2 px-2 ring-gray-200 dark:ring-gray-600 dark:focus:ring-gray-400 focus:ring-sky-600 focus:outline-none focus:border-none" placeholder="Password" />

                <label htmlFor="password" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white bg-inherit rounded-lg mx-1 px-1 py-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 dark:peer-focus:text-gray-300 peer-focus:text-sm transition-all">Password</label>
              </div>


              {/* {PasswordStatus && (
                <h4 className="text-md py-2 text-left text-red-400">{PasswordStatus}</h4>
              )} */}
            </div>
      <Link className='flex items-start text-btn-color dark:text-gray-300 font-medium'>Forgot Your Password?</Link>
      <button className='rounded-full py-4  bg-btn-color text-white hover:bg-btn-hover'> Login</button>
    </form>}
    </>
  )
}
