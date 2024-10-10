import Signup from "Component/Auth/SignUp.jsx";
import Nav from "Component/Auth/Nav.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Component/Auth/Login.jsx";
import Home from "./Component/Auth/Home.jsx";
import AuthLayout from "./layout/authlayout";
import Navbar from "Component/Dashboard/common/Navbar.jsx";
import Sidebar from "Component/Dashboard/common/Sidebar.jsx";
import GetStarted from "./Component/Dashboard/pages/GetStarted.jsx";
import Homepage from "Component/Dashboard/pages/Homepage.jsx";
function App() {
  return (
    <BrowserRouter>
      {/* this authLayout is the background used for the auth section */}
      {/* <AuthLayout>
        <Nav />
        <div className="justify-center flex flex-col items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
          </Routes>
        </div>
      </AuthLayout> */}
      <div>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <Routes>
            {/* <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} /> */}

            <Route path="/" element={<Homepage />} />
            <Route path="/get-started" element={<GetStarted />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
