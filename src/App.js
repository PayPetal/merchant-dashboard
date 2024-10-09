import Signup from "Component/Auth/SignUp.jsx";
import Nav from "Component/Auth/Nav.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "Component/Auth/Login.jsx";
import Home from "Component/Auth/Home.jsx";
import Authlayout from "./layout/authlayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
