import "./scss/main.scss";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import Form from "./components/Form.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Logout from "./components/Logout.jsx";


function App() {


  return (
      <div className="app">
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/give-items-back" element={<Form/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/logout" element={<Logout/>}/>
          </Routes>
      </div>
  )
}

export default App
