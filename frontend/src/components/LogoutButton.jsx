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
    <button
      onClick={handleLogout}
      className="flex items-center w-full p-2 text-sm font-medium text-gray-900 rounded-lg hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
    >
      <i className="bi bi-box-arrow-right me-2"></i>
      Logout
    </button>
  );
};

export default LogoutButton;