import React from "react";

// Ensure environment variable is correctly accessed
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

function Login() {
  const googleAuthUrl = `${API_URL}/auth/google`;

  return (
    <div className="login-container">
      <h1>Welcome to Earnings Calculator</h1>
      <p>Calculate your earnings from calendar events</p>
      
      <div className="login-button">
        <a href={googleAuthUrl} className="google-btn">
          <img src="/google-logo.png" alt="Google" />
          Sign in with Google
        </a>
      </div>
    </div>
  );
}

export default Login;
