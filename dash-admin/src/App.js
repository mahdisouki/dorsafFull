import logo from "./logo.svg";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import GestionLibrairie from "./component/Dashboard/GestionLibrairie";
import GestionUser from "./component/Dashboard/GestionUser";
import GestionTransfert from "./component/Dashboard/GestionTransfert";
import GestionBooks from "./component/Dashboard/GestionBooks";
import SiderBar from "./component/Navbar/SiderBar";
import Login from "./component/Dashboard/Login";
import Cookies from 'js-cookie'
function App() {
  const token = Cookies.get('token')
  return (
    <Router>
      {token?(
        <div>
        <SiderBar/>
        <div id="content" style={{ marginLeft: "250px", padding: "20px"  }}>
          <Routes>
          
            <Route path="/GestionLibrairie" element={<GestionLibrairie />} />
            <Route path="/GestionBooks" element={<GestionBooks />} />
            <Route path="/GestionTransfert" element={<GestionTransfert />} />
            <Route path="/GestionUser" element={<GestionUser />} />
          </Routes>
        </div>
      </div>
      ):(
        <Login/>
      )}
      
    </Router>
  );
}

export default App;
