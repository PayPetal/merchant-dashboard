import Signup from "Component/Auth/SignUp.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Component/Auth/Login.jsx";
import Home from "./Component/Auth/Home.jsx";
import SiteContextProvider from "Context/SiteContext.jsx";


function App() {
  return (
    <BrowserRouter>
    <SiteContextProvider>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </SiteContextProvider>
     
    </BrowserRouter>
  );
}

export default App;
