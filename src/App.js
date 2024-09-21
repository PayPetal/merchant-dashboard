
import Signup from "./Component/Auth/SignUp.jsx"
import Nav from "./Component/Auth/Nav.jsx"
import { Routes, Route, } from "react-router-dom";
import Login from "./Component/Auth/Login.jsx";


function App() {
  return (
    <div className="App bg-blue-600 h-screen font-satoshi">

      <Nav />
    <div className="justify-center flex flex-col items-center">
    <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Signup />} />
      </Routes>
    </div>
     
    </div>


  );
}

export default App;
