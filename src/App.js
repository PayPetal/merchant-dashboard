import Signup from "Component/Auth/SignUp.jsx";
import Nav from "Component/Auth/Nav.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "Component/Auth/Login.jsx";
import Home from "Component/Auth/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-blue-600 dark:bg-blue-950  h-screen font-satoshi">
        <Nav />
        <div className="justify-center flex flex-col items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
