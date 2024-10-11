import Signup from "Component/Auth/SignUp.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Component/Auth/Login.jsx";
import Home from "./Component/Auth/Home.jsx";
import Dashboard from "pages/dashboard/index.js";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
