import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import AuthSuccess from "./components/AuthSuccess";
import JobsCalendar from "./components/JobsCalendar";
import Policy from "./components/Policy"
import { AuthContext } from "./AuthContext";
import Home from "./components/Home";
import { ThreeDot } from "react-loading-indicators";



// Use correct environment variable format
const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  const [auth, setAuth] = useState({ isAuthenticated: false, user: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      setLoading(false);
      return;
    }

    fetch(`${API_URL}/auth/verify-token`, { 
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setAuth(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching auth status:", error);
        localStorage.removeItem('authToken');
        setLoading(false);
      });
  }, []);


  if (loading) return <div className="loading"><ThreeDot color="#070c22ff" size="medium" text="" textColor="" /></div>;



  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/policy" element={<Policy />} />

        <Route path="/auth-success" element={<AuthSuccess />} />

        <Route path="/login" element={auth.isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/dashboard" element={auth.isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/settings" element={auth.isAuthenticated ? <Settings /> : <Navigate to="/login" />} />
        <Route path="/profile" element={auth.isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/jobs" element={auth.isAuthenticated ? <JobsCalendar /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to={auth.isAuthenticated ? "/dashboard" : "/login"} />} />
      </Routes>
    </Router>
    </AuthContext.Provider>
  );
};

export default App;
