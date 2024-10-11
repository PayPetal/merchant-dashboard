import Signup from "Component/Auth/SignUp.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Component/Auth/Login.jsx";
import Home from "./Component/Auth/Home.jsx";
import Dashboard from "Component/Dashboard/pages/Dashboard.jsx";
import Navbar from "../src/Component/Dashboard/common/Navbar.jsx";
import Sidebar from "Component/Dashboard/common/Sidebar.jsx";
import Homepage from "Component/Dashboard/pages/Homepage.jsx";
import GetStarted from "Component/Dashboard/pages/GetStarted.jsx";

function App() {
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />

        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes> */}
      <div>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/get-started" element={<GetStarted />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
