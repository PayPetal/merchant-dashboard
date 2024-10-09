import Signup from "Component/Auth/SignUp.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Component/Auth/Login.jsx";
import Home from "./Component/Auth/Home.jsx";


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
