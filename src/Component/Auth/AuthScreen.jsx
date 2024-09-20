import Signup from "./SignUp.jsx"
import Login from "./Login.jsx"
import Nav from "./Nav.jsx"

export default function AuthScreen() {
  return (
    <div className="bg-blue-600 h-screen ">
      <Nav />
      <div className="justify-center flex flex-col items-center">
        {/* <Signup /> */}
        <Login />
      </div>
      {/* <h3>AuthScreen</h3> */}


    </div>

  )
}
