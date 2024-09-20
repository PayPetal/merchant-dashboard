import AuthScreen from "./Component/Auth/AuthScreen.jsx";
import { Routes, Route, } from "react-router-dom";
import Login from "./Component/Auth/Login.jsx";
function App() {
  return (
    <div className="App">
      <AuthScreen />
      <Routes>
        <Route path="login" element={<Login />} />
      </Routes>
    </div>


  );
}

export default App;
