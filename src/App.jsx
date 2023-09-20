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
              <Route path="/oddaj-rzeczy" element={<Form/>}/>
              <Route path="/logowanie" element={<Login/>}/>
              <Route path="/rejestracja" element={<Register/>}/>
              <Route path="/wylogowano" element={<Logout/>}/>
          </Routes>
      </div>
  )
}

export default App
