import React from "react";
import "./Login.css"
import googleLogo from "../assets/google-logo.png" 
import Header from "./Header";

// Ensure environment variable is correctly accessed
const API_URL = import.meta.env.VITE_API_URL;

function Login() {
  const googleAuthUrl = `${API_URL}/auth/google`;
const formInput = <>        <div>
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@company.com" required />
        </div>
        <div>
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div>
        <div className="flex items-start">
            <div className="flex items-start">
                          </div>
            <a href="#" className="ms-auto text-sm text-blue-700 hover:underline ">Lost Password?</a>
        </div></>
  return (<>

    <Header></Header>

<div className="login-wrapper">



<div className="d-height w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form className="space-y-6" action="#">

        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to UrshiftMate</h5>
      
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <a href={googleAuthUrl} className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
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
  </>
  
  );
}

export default Login;
