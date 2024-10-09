// var base_url = window.location.origin;
// // "http://stackoverflow.com"

// var host = window.location.host;
// // stackoverflow.com

// var pathArray = window.location.pathname.split( '/' );
// // ["", "questions", "21246818", "how-to-get-the-base-url-in-javascript"]

import { useState, useEffect} from 'react'
import { createContext } from 'react'

//this will keep track of states and fucntions in our program
export const SiteContext = createContext(null)

export default function SiteContextProvider(props) {

    const [passwordProgress, setPasswordProgress] = useState(0)
    const [PasswordStatus, setPasswordStatus] = useState("")

    const [color , setColor] = useState(' progress-custom  w-full h-2 transition-all duration-300 ease-out  [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-200 [&::-webkit-progress-value]:bg-green-400  overflow-hidden')
  
    const passwordValidation = (password) => {

        const hasLowerCase = /[a-z]/.test(password);
        const hasUpperCase = /[A-Z]/.test(password);
        const hasNumber = /\d+/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?':{}|<>]/.test(password);
        console.log(hasLowerCase, hasUpperCase, hasNumber, hasSpecialChar)
    
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
            setPasswordStatus("very strong")
            setColor(" progress-custom  w-full h-2 transition-all duration-300 ease-out  [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-200 [&::-webkit-progress-value]:bg-green-400  overflow-hidden")
          } else if (passedChecks === 3) {
            setPasswordProgress(75)
            setPasswordStatus("Strong")
            setColor(" progress-custom  w-full h-2 transition-all duration-300 ease-out  [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-200 [&::-webkit-progress-value]:bg-blue-400  overflow-hidden")
          } else if (passedChecks === 2) {
            setPasswordProgress(50)
            setColor(" progress-custom  w-full h-2 transition-all duration-300 ease-out  [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-200 [&::-webkit-progress-value]:bg-yellow-400  overflow-hidden")
            setPasswordStatus("medium")
          } 
        }else{
          setPasswordProgress(25)
            setPasswordStatus("low")
            setColor(" progress-custom  w-full h-2 transition-all duration-300 ease-out  [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-200 [&::-webkit-progress-value]:bg-red-400  overflow-hidden")
            // element.classList.replace('[&::-webkit-progress-value]:bg-red-400')
        }
        
    
        console.log(passedChecks)
    
        // if (password.length >= 8) {
        //   console.log("password is greater than or equal 8")
    
        // } else if (password.length > 0 || password.length <= 4) {
        //   console.log("password is greater than 4 and 0")
        //   setPasswordProgress(50)
        // }
      }


    const contextValue = {}

    return (
        // this will help us keep track  of the data and monitors my code 

        <SiteContext.Provider value={contextValue}>
            {/* props.children is used to pass the children components to the provider component*/}
            {props.children}
        </SiteContext.Provider>
    )
}