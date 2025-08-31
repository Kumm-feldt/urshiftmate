import React from "react";
import "./Login.css"
import googleLogo from "../assets/google-logo.png" 

// Ensure environment variable is correctly accessed
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

function Login() {
  const googleAuthUrl = `${API_URL}/auth/google`;
const formInput = <>        <div>
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
        </div>
        <div>
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <div className="flex items-start">
            <div className="flex items-start">
                          </div>
            <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
        </div></>
  return (

<div className="login-wrapper">



<div className="d-height w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form className="space-y-6" action="#">

        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to UrshiftMate</h5>
      
        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
        </div>
        <div className="login-options text-sm font-medium">
            <p className="login-text">Or continue with</p>
            <div className="circle-logo">
                <a href={googleAuthUrl}>
                    <img src={googleLogo} className="google-icon" alt="google" />
                </a>
            </div>
            
        </div>
        
    </form>
</div>
</div>

  
  );
}

export default Login;
