import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaCheck, FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import axios from "axios";
import Authlayout from "layout/authlayout";
import { SiteContext } from "Context/SiteContext";

export default function Signup() {
  // let base_url = window.location.origin;
  // // console.log(base_url)

  // const [formData, setFormData] = useState({
  //   baseUrl: base_url,
  //   firstName: "",
  //   lastName: "",
  //   middleName: "",
  //   email: "",
  //   phoneNumber: "",
  //   country: "",
  //   confirmPassword: "",
  //   password: "",
  // });

  // console.log(formData)
  // const [PasswordStatus, setPasswordStatus] = useState("")
  // const [color_pass, setColor_pass] = useState("text-black")
  // const [bg_pass, setBg_pass] = useState("bg-gray-100")
  // const [color, setColor] = useState("progress-custom  w-full h-2 transition-all duration-300 ease-out  [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-200 [&::-webkit-progress-value]:bg-yellow-400  overflow-hidden")
  // console.log(formData);


  // const [countryCode, setCountryCode] = useState("+"); // Initial value

  // const [passwordProgress, setPasswordProgress] = useState(0);

  // function debounce(func, delay) {
  //   let timeoutId;

  //   return function(...args) {
  //     clearTimeout(timeoutId);

  //     timeoutId = setTimeout(() => {
  //       func.apply(this, args);
  //     }, delay);
  //   };
  // }

  //change the function to reduce space and stop it from updating state when the user is typing
  // const handleSignupChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  //   // Debounce the state update to prevent unnecessary re-renders
  //   // debounce(() => {
  //   //   setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  //   // }, 100);

  //   const selectedCountry = document
  //     .getElementById("country")
  //     .value.toLowerCase();
  //   // console.log(selectedCountry)
  //   setCountryCode(countryCodes[selectedCountry] || "not seen"); // Set code or empty string

  //   passwordValidation(formData.password)

  // }

  // const passwordValidation = (password) => {

  //   const hasLowerCase = /[a-z]/.test(password);
  //   const hasUpperCase = /[A-Z]/.test(password);
  //   const hasNumber = /\d+/.test(password);
  //   const hasSpecialChar = /[!@#$%^&*(),.?':{}|<>]/.test(password);
  //   console.log(hasLowerCase, hasUpperCase, hasNumber, hasSpecialChar)

  //   const passedChecks = [
  //     hasLowerCase,
  //     hasUpperCase,
  //     hasNumber,
  //     hasSpecialChar,
  //   ].filter(Boolean).length;
  //   // const element = 
  //   // document.querySelector('[::-webkit-progress-value]:bg-green-400s')
  //   // document.getElementsByClassName('[::-webkit-progress-value]:bg-green-400s')

  //   if (password.length >= 8) {
  //     if (passedChecks === 4 ) {
  //       setPasswordProgress(100)
  //       setColor_pass("text-green-700")
  //       setBg_pass('bg-green-700')
  //       setPasswordStatus("very strong")
  //       setColor(" progress-custom  w-full h-2 transition-all duration-300 ease-out  [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-200 [&::-webkit-progress-value]:bg-green-400  overflow-hidden")
  //     } else if (passedChecks === 3) {
  //       setPasswordProgress(75)
  //       setColor_pass("text-blue-700")
  //       setBg_pass('bg-blue-700')
  //       setPasswordStatus("Strong")
  //       setColor(" progress-custom  w-full h-2 transition-all duration-300 ease-out  [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-200 [&::-webkit-progress-value]:bg-blue-400  overflow-hidden")
  //     } else if (passedChecks === 2) {
  //       setPasswordProgress(50)
  //       setColor_pass("text-yellow-500")
  //       setBg_pass('bg-yellow-500')
  //       setColor(" progress-custom  w-full h-2 transition-all duration-300 ease-out  [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-200 [&::-webkit-progress-value]:bg-yellow-400  overflow-hidden")
  //       setPasswordStatus("medium")
  //     } 
  //   }else{
  //     setPasswordProgress(25)
  //       setPasswordStatus("Weak")
  //       setColor_pass("text-red-700")
  //       setBg_pass('bg-red-700')
  //       setColor(" progress-custom  w-full h-2 transition-all duration-300 ease-out  [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-200 [&::-webkit-progress-value]:bg-red-700  overflow-hidden")
  //       // element.classList.replace('[&::-webkit-progress-value]:bg-red-400')
  //   if (formData.password.length >= 8) {
  //     console.log("password is greater than or equal 8");
  //     setPasswordProgress(100);
  //   } else if (formData.password.length > 0 || formData.password.length <= 4) {
  //     console.log("password is greater than 4 and 0");
  //     setPasswordProgress(50);
  //   }
  //   };}
  // const countryCodes = {
  //   ng: "+234",
  //   unitedstates: "+1",
  //   unitedkingdom: "+44",
  //   kenya: "+254",
  //   ghana: "+233",
  //   sourthafrica: "+27",
  //   // Add more country codes here
  // };

  // const [icon, setIcon] = useState(false);
  // const [type, setType] = useState("password");
  // const handleToggle = () => {
  //   if (type === "password") {
  //     setIcon(true);
  //     setType("text");
  //   } else {
  //     setIcon(false);
  //     setType("password");
  //   }
  // };

  // const [success, setsuccess] = useState(false);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   if (formData.password !== formData.confirmPassword) {
  //     setPasswordStatus("Passwords do not match.");
  //     console.log("password dont match");
  //     return;
  //   } else if (formData.password === formData.confirmPassword) {
  //     setPasswordStatus("password match");
  //   }

  //   try {
  //     //create a variable for this
  //     const response = await axios.post(
  //       "https://merchant.paypetalhq.xyz/merchant/auth/register",
  //       {
  //         baseUrl: base_url,
  //         firstName: formData.firstName,
  //         lastName: formData.lastName,
  //         middleName: formData.middleName,
  //         email: formData.email,
  //         phoneNumber: formData.phoneNumber,
  //         country: formData.country,
  //         confirmPassword: formData.confirmPassword,
  //         password: formData.password,
  //       }
  //     );
  //     console.log("Registration successful:", response.data, setsuccess(true));
  //   } catch (error) {
  //     console.error("Registration error:", error);
  //   }
  // };


  const {handlePasswordToggle, passwordIcon, PasswordIconType,handleSignup, handleSignupChange,passwordProgress,PasswordStatus,countryCode,registerStatus,color,color_pass}= useContext(SiteContext)

  return (
    <Authlayout>
      <>
        {registerStatus ? (
          <div className="flex flex-col xl:w-5/12 lg:w-8/12 md:w-10/12 sm:w-10/12 w-10/12 gap-4 items-center  p-6 rounded-3xl my-40  bg-white dark:bg-gray-900 dark:text-white animate-fade-left">
            <div className="rounded-full border dark:border-none p-6 bg-checkbox-bg dark:bg-green-600 ">
              <FaCheck color="text-check" />
            </div>

            <h4 className="lg:text-2xl font-medium">Sign Up Successful</h4>
            <p className="text-md font-normal text-center w-10/12">
              Congratulations!!! We noticed you just signed up on paypetal.
              Please check the next steps below for next steps.
            </p>
            <div className="flex flex-col gap-1">
              <h4 className="text-sm font-bold">Next Steps</h4>
              <hr className=" border-t-2  border-btn-color" />
            </div>
            <div className="flex flex-row bg-violet-50 p-4 rounded-lg gap-4">
              <span className="p-4 bg-violet-200 rounded-full h-2/6"></span>
              <div className="flex flex-col items-start gap-2">
                <h4 className="text-btn-color text-sm font-medium">
                  Verify Your Email
                </h4>
                <p className="text-btn-color text-md font-normal ">
                  We just sent an activation link to the email address you used
                  to sign up here. Go to your email app to click the link in
                  order to activate your account.
                </p>
                {
                  PasswordStatus === "Weak" ?
                  <>
                   <p
                  className={`text-sm  font-medium ${color_pass} `}>
                    Must contain at least one alphabet or number
                </p>
                <p
                  className="text-sm text-red-700 font-medium">
                   Must not be less than 8 characters
                </p>
                  </>
                  :null
                }
              </div>
              <div className="flex items-center">
                <IoIosArrowForward className="text-4xl items-center text-violet-200" />
              </div>
            </div>
          </div>
        ) : (
          <form
            action="POST"
            onSubmit={handleSignup}
            className="flex flex-col xl:w-6/12 lg:w-8/12 md:w-10/12 sm:w-10/12 w-10/12 gap-4  p-6 rounded-3xl my-5 md:my-20 text-center bg-white  dark:bg-gray-900 dark:text-white "
          >
            <div className="flex flex-col  items-center gap-4">
              <div className="flex flex-col">
                <h4 className="xl:text-2xl lg:text-1xl md:text-xl sm:text-lg  text-sm font-medium">
                  Sign Up to Accept Payments From Your Customers
                </h4>
                <h4 className="xl:text-2xl lg:text-1xl md:text-xl sm:text-lg  text-sm font-medium">
                  Easily on Paypetal
                </h4>
              </div>

              <div className="flex flex-row gap-2">
                <p className="text-xs lg:text-md font-light">
                  {" "}
                  Already got an Account?
                </p>
                <Link to="/login" className="text-link-a  text-xs lg:text-md">
                  Login here
                </Link>
              </div>
            </div>

            <div className=" grid md:grid-cols-2 grid-cols-1 justify-between  gap-4">
              <div className="bg-white   rounded-lg">
                <div className="relative w-full bg-inherit rounded-lg">
                  <input
                    type="text"
                    onChange={handleSignupChange}
                    id="firstName"
                    name="firstName"
                    autoComplete="on"
                    className="peer bg-transparent h-12 w-full rounded-lg text-gray-700 dark:text-white placeholder-transparent ring-2 px-2 ring-gray-200 dark:ring-white focus:ring-sky-600 focus:outline-none focus:border-none"
                    placeholder="Firstname"
                  />
                  <label
                    htmlFor="firstName"
                    className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit rounded-lg mx-1 px-1 py-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                  >
                    Firstname
                  </label>
                </div>
              </div>

              <div className="bg-white  rounded-lg">
                <div className="relative bg-inherit rounded-lg">
                  <input
                    type="text"
                    onChange={handleSignupChange}
                    id="middleName"
                    name="middleName"
                    autoComplete="on"
                    className="peer bg-transparent h-12 w-full rounded-lg text-gray-700 dark:text-white placeholder-transparent ring-2 px-2 ring-gray-200 dark:ring-white focus:ring-sky-600 focus:outline-none focus:border-none"
                    placeholder="Middlename"
                  />
                  <label
                    htmlFor="middleName"
                    className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit rounded-lg mx-1 px-1 py-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                  >
                    Middlename
                  </label>
                </div>
              </div>
              <div className="bg-white  rounded-lg">
                <div className="relative bg-inherit rounded-lg">
                  <input
                    type="text"
                    onChange={handleSignupChange}
                    id="lastName"
                    name="lastName"
                    autoComplete="on"
                    className="peer bg-transparent h-12 w-full rounded-lg text-gray-700 dark:text-white placeholder-transparent ring-2 px-2 ring-gray-200 dark:ring-white focus:ring-sky-600 focus:outline-none focus:border-none"
                    placeholder="Lastname"
                  />
                  <label
                    htmlFor="lastName"
                    className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit rounded-lg mx-1 px-1 py-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                  >
                    Lastname
                  </label>
                </div>
              </div>
              <div className="bg-white  rounded-lg">
                <div className="relative bg-inherit rounded-lg">
                  <input
                    type="email"
                    onChange={handleSignupChange}
                    id="email"
                    name="email"
                    autoComplete="username"
                    className="peer bg-transparent h-12 w-full rounded-lg text-gray-700 dark:text-white placeholder-transparent ring-2 px-2 ring-gray-200 dark:ring-white focus:ring-sky-600 focus:outline-none focus:border-none"
                    placeholder="Email"
                  />
                  <label
                    htmlFor="email"
                    className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit rounded-lg mx-1 px-1 py-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                  >
                    Email
                  </label>
                </div>
              </div>
              <div className="bg-white  rounded-lg">
                <div className="relative bg-inherit rounded-lg">
                  <select
                    onChange={handleSignupChange}
                    id="country"
                    name="country"
                    className="peer bg-transparent h-12 w-full rounded-lg text-gray-700 dark:text-white placeholder-transparent ring-2 px-2 ring-gray-200 dark:ring-white focus:ring-sky-600 focus:outline-none focus:border-none"
                  >
                    <option value="">Select a Country</option>
                    <option value="NG">Nigeria</option>
                    <option value="sourthafrica">Sourt Africa</option>
                    <option value="Kenya">Kenya</option>
                    <option value="unitedStates">United States</option>
                    <option value="unitedKingdom">United Kingdom</option>

                    <option value="Ghana">Ghana</option>
                  </select>
                  <label
                    htmlFor="country"
                    className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit rounded-lg mx-1 px-1 py-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                  >
                    Country
                  </label>
                </div>
              </div>

              <div className="bg-white  rounded-lg">
                <div className="relative bg-inherit rounded-lg">
                  <div className="left-0 rounded-lg rounded-r-none px-2 absolute text-2xl bg-slate-50 py-3.5 sm:py-2 md:py-3.5 text-gray-400">
                    <h4 className="text-sm md:text-md font-light">
                      {countryCode}
                    </h4>
                  </div>
                  <input
                    type="text"
                    onChange={handleSignupChange}
                    id="phoneNumber"
                    name="phoneNumber"
                    autoComplete="on"
                    className="peer bg-transparent h-12 w-full rounded-lg text-gray-700 dark:text-white placeholder-transparent ring-2 pl-14 ring-gray-200 dark:ring-white focus:ring-sky-600 focus:outline-none focus:border-none"
                    placeholder="Password"
                  />

                  <label
                    htmlFor="phoneNumber"
                    className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit rounded-lg mx-1 px-1  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:left-12 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm  "
                  >
                    Phone Number
                  </label>
                </div>
              </div>

              <div className="bg-white  rounded-lg">
                <div className="relative bg-inherit rounded-lg">
                  <div className="right-2 absolute text-2xl top-3 text-gray-400">
                    {passwordIcon ? (
                      <FaRegEye onClick={handlePasswordToggle} />
                    ) : (
                      <FaRegEyeSlash onClick={handlePasswordToggle} />
                    )}
                  </div>
                  <input
                    type={PasswordIconType}
                    onChange={handleSignupChange}
                    id="password"
                    name="password"
                    autoComplete="new-password"
                    className="peer bg-transparent h-12 w-full rounded-lg text-gray-700 dark:text-white placeholder-transparent ring-2 px-2 ring-gray-200 dark:ring-white focus:ring-sky-600 focus:outline-none focus:border-none"
                    placeholder="Password"
                  />

                  <label
                    htmlFor="password"
                    className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit rounded-lg mx-1 px-1 py-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                  >
                    Password
                  </label>
                </div>
              
         <div className='w-full text-left'>
                <progress id="pass" className={color} value={passwordProgress} max="100">{passwordProgress}%</progress>

                  {/* <div className='flex flex-row gap-4 py-3'>
                    <span className={`p-1 bg-gray-100 $} rounded-full  w-4/12`}></span>
                    <span className={`p-1 bg-gray-100 $} rounded-full  w-4/12`}></span>
                    <span className={`p-1 bg-gray-100 $} rounded-full  w-4/12`}></span>
                     <span className={`p-1 bg-gray-100 $} rounded-full  w-4/12`}></span>
                  </div> */}
                {/* <progress id="pass" className=" progress-bar " value={passwordProgress} max="100">{passwordProgress}%</progress> */}
                <p
                  id="strength-text"
                  className={`text-sm  font-medium ${color_pass} `}>
                  Password strength: <span id='strength-label'>{PasswordStatus}</span>
                </p>
                {
                  PasswordStatus === "Weak" ?
                  <>
                   <p
                  className={`text-sm  font-medium ${color_pass} `}>
                    Must contain at least one alphabet or number
                </p>
                <p
                  className="text-sm text-red-700 font-medium">
                   Must not be less than 8 characters
                </p>
                  </>
                  :null
                }
              </div>

              </div>
              <div className="bg-white  rounded-lg">
                <div className="relative bg-inherit rounded-lg">
                  <div className="right-2 absolute text-2xl top-3 text-gray-400">
                    {passwordIcon ? (
                      <FaRegEye onClick={handlePasswordToggle} />
                    ) : (
                      <FaRegEyeSlash onClick={handlePasswordToggle} />
                    )}
                  </div>
                  <input
                    type={PasswordIconType}
                    onChange={handleSignupChange}
                    id="confirmPassword"
                    name="confirmPassword"
                    autoComplete="new-password"
                    className="peer bg-transparent h-12 w-full rounded-lg text-gray-700 dark:text-white placeholder-transparent ring-2 px-2 ring-gray-200 dark:ring-white focus:ring-sky-600 focus:outline-none focus:border-none"
                    placeholder="Password"
                  />

                  <label
                    htmlFor="confirmPassword"
                    className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit rounded-lg mx-1 px-1 py-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                  >
                    Confirm Password
                  </label>
                </div>
              </div>
            </div>
            <button
              className="rounded-full py-4 sm:w-8/12 md:w-4/12 bg-btn-color text-white hover:bg-btn-hover"
              title="Submit form"
              type="submit"
            >
              {" "}
              Sign Up
            </button>
          </form>
        )}
      </>
    </Authlayout>
  );
}
