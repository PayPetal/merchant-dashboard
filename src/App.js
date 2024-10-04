
import Signup from "./Component/Auth/SignUp.jsx"
import Nav from "./Component/Auth/Nav.jsx"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Component/Auth/Login.jsx";
import Home from "./Component/Auth/Home.jsx";
import AuthLayout from './layout/AuthLayout/index';


function App() {
  return (
    <BrowserRouter>

    {/* this authLayout is the background used for the auth section */}
      <AuthLayout>
        <Nav />
        <div className="justify-center flex flex-col items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
          </Routes>
        </div>
      </AuthLayout>
    </BrowserRouter>

  );
}

export default App;
