// var base_url = window.location.origin;
// // "http://stackoverflow.com"

// var host = window.location.host;
// // stackoverflow.com

// var pathArray = window.location.pathname.split( '/' );
// // ["", "questions", "21246818", "how-to-get-the-base-url-in-javascript"]

import { useState, useEffect} from 'react'
import { createContext } from 'react'
import axios from 'axios';

//this will keep track of states and fucntions in our program
export const SiteContext = createContext(null)


export default function SiteContextProvider(props) {


  const [passwordIcon, setpasswordIcon] = useState(false);
  const [PasswordIconType, setPasswordIconType] = useState("password");
  const handlePasswordToggle = () => {
    if (PasswordIconType === "password") {
      setpasswordIcon(true);
      setPasswordIconType("text");
    } else {
      setpasswordIcon(false);
      setPasswordIconType("password");
    }
  }






  let base_url = window.location.origin;
  // console.log(base_url)
  const [formData, setFormData] = useState({
    baseUrl: base_url,
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    phoneNumber: "",
    country: "",
    confirmPassword: "",
    password: "",
  });

  const [responseData, setResponseData] = useState({

  })

  //data from the 
  const [accessToken, setAccessToken] = useState("")
  const [refreshToken, setrefreshToken] = useState("")

  //this shows if the user is logged in or not
  const [statusCode, setStatusCode] = useState()
  const [status, setStatus] = useState()



  //this handles the changes of the formdata 
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  //state to hold and determine the success for login
  const [loginStatus, setloginStatus] = useState(false)

  const handleLogin = async (event) => {
    event.preventDefault();
    const body = {
      email: formData.email,
      password: formData.password
    }
    // console.log(body)
    try {

      //create a variable for this 
      const response = await axios.post("https://merchant.paypetalhq.xyz/merchant/auth/login",
        body
      )
      if (response.status === 200 || response.data.statusCode === "00" || response.data.status === true ) {
        setloginStatus(true)
        setStatusCode(response.data.statusCode)
        setStatus(response.data.status)
      } 

      // switch (response.status) {
      //   case 200:
      //     if ( response.data.statusCode === "00" || response.data.status === true ) {
      //         setsuccess(true)
      //         setStatusCode(response.data.statusCode)
      //         setStatus(response.data.status)
      //       } 
      //     console.log("Login was successfull", response.data)
      //     break;
      //   default:
          
      //     console.log("Login was unsuccessfull",response.data)
      //     break;
      // }


      // console.log(response.status)
      // console.log('Login successful:', response.data, setrefreshToken(response.data.refreshToken), setAccessToken(response.data.accessToken), );

    } catch (error) {
      setloginStatus(error)
      // console.error('Login error:', error);
    }

  }


  //state to hold and determine the success
  const [registerStatus, setRegisterStatus] = useState(false)
  //password status for signup 
  const [PasswordStatus, setPasswordStatus] = useState("")

  //password strengght bar
  const [color_pass, setColor_pass] = useState("text-black")
  const [bg_pass, setBg_pass] = useState("bg-gray-100")
  const [color, setColor] = useState("progress-custom  w-full h-2 transition-all duration-300 ease-out  [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-200 [&::-webkit-progress-value]:bg-yellow-400  overflow-hidden")
  const [passwordProgress, setPasswordProgress] = useState(0);
  const [countryCode, setCountryCode] = useState("+");

  const countryCodes = {
    ng: "+234",
    unitedstates: "+1",
    unitedkingdom: "+44",
    kenya: "+254",
    ghana: "+233",
    sourthafrica: "+27",
    // Add more country codes here
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    // Debounce the state update to prevent unnecessary re-renders
    // debounce(() => {
    //   setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    // }, 100);

    const selectedCountry = document
      .getElementById("country")
      .value.toLowerCase();
    // console.log(selectedCountry)
    setCountryCode(countryCodes[selectedCountry] || "not seen"); // Set code or empty string

    passwordValidation(formData.password)

  }


  const passwordValidation = (password) => {

    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d+/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?':{}|<>]/.test(password);
    // console.log(hasLowerCase, hasUpperCase, hasNumber, hasSpecialChar)

    const passedChecks = [
      hasLowerCase,
      hasUpperCase,
      hasNumber,
      hasSpecialChar,
    ].filter(Boolean).length;
    // const element = 
    // document.querySelector('[::-webkit-progress-value]:bg-green-400s')
    // document.getElementsByClassName('[::-webkit-progress-value]:bg-green-400s')

    if (password.length >= 8) {
      if (passedChecks === 4 ) {
        setPasswordProgress(100)
        setColor_pass("text-green-700")
        setBg_pass('bg-green-700')
        setPasswordStatus("very strong")
        setColor(" progress-custom  w-full h-2 transition-all duration-300 ease-out  [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-200 [&::-webkit-progress-value]:bg-green-400  overflow-hidden")
      } else if (passedChecks === 3) {
        setPasswordProgress(75)
        setColor_pass("text-blue-700")
        setBg_pass('bg-blue-700')
        setPasswordStatus("Strong")
        setColor(" progress-custom  w-full h-2 transition-all duration-300 ease-out  [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-200 [&::-webkit-progress-value]:bg-blue-400  overflow-hidden")
      } else if (passedChecks === 2) {
        setPasswordProgress(50)
        setColor_pass("text-yellow-500")
        setBg_pass('bg-yellow-500')
        setColor(" progress-custom  w-full h-2 transition-all duration-300 ease-out  [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-200 [&::-webkit-progress-value]:bg-yellow-400  overflow-hidden")
        setPasswordStatus("medium")
      } 
    }else{
      setPasswordProgress(25)
        setPasswordStatus("Weak")
        setColor_pass("text-red-700")
        setBg_pass('bg-red-700')
        setColor(" progress-custom  w-full h-2 transition-all duration-300 ease-out  [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-200 [&::-webkit-progress-value]:bg-red-700  overflow-hidden")
        // element.classList.replace('[&::-webkit-progress-value]:bg-red-400')
    if (formData.password.length >= 8) {
      // console.log("password is greater than or equal 8");
      setPasswordProgress(100);
    } else if (formData.password.length > 0 || formData.password.length <= 4) {
      // console.log("password is greater than 4 and 0");
      setPasswordProgress(50);
    }
    };}

  
  const handleSignup = async (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordStatus("Passwords do not match.");
      // console.log("password dont match");
      return;
    } else if (formData.password === formData.confirmPassword) {
      setPasswordStatus("password match");
    }

    try {
      //create a variable for this
      const response = await axios.post(
        "https://merchant.paypetalhq.xyz/merchant/auth/register",
        {
          baseUrl: base_url,
          firstName: formData.firstName,
          lastName: formData.lastName,
          middleName: formData.middleName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          country: formData.country,
          confirmPassword: formData.confirmPassword,
          password: formData.password,
        }
      );
      // console.log("Registration successful:", response.data, );
      setResponseData(response.data)
      setRegisterStatus(true)
    } catch (error) {
      setRegisterStatus(error)
      // console.error("Registration error:", error);
    }
  };




    const contextValue = {handleLogin, handleSignup, handleChange, loginStatus, handlePasswordToggle,passwordIcon,PasswordIconType, handleSignupChange,countryCode, passwordValidation, passwordProgress,registerStatus,PasswordStatus,bg_pass,color,color_pass}

    return (
        // this will help us keep track  of the data and monitors my code 

        <SiteContext.Provider value={contextValue}>
            {/* props.children is used to pass the children components to the provider component*/}
            {props.children}
        </SiteContext.Provider>
    )
}