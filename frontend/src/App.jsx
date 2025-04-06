import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

// Use correct environment variable format
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

const App = () => {
  const [auth, setAuth] = useState({ isAuthenticated: false, user: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/auth/status`, { credentials: "include" }) // Fetch session status
      .then((res) => res.json())
      .then((data) => {
          setAuth(data)
          setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching auth status:", error)
        setLoading(false)
      });
  }, []);


  if (loading) return <div>Loading...</div>; // Or a spinner



  return (
    <Router>
      <Routes>
        <Route path="/login" element={auth.isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/dashboard" element={auth.isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to={auth.isAuthenticated ? "/dashboard" : "/login"} />} />
      </Routes>
    </Router>
  );
};

export default App;
