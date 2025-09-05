import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../AuthContext";
import * as api from "../api.js"

const LogoutButton =()=> {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleLogout = async () => {
    try{
      localStorage.removeItem('authToken');
      setAuth({ isAuthenticated: false, user: null }) // clear local auth
      navigate("/login"); // redirect to login page after logout
    }catch(err){
      console.log("error, ", err)
    }
    
      
  };      



  return (
    <li
      onClick={handleLogout}
      className="bi bi-box-arrow-right me-2">
      <span className="ms-3">Logout</span>
    </li>
  );
};

export default LogoutButton;