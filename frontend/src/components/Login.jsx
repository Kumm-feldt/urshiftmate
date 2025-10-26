import React from "react";
import "./Login.css"
import googleLogo from "../assets/google-logo.png" 
import Header from "./Header";
import login from "../assets/login3.png"

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
  <div className="login-sub-wrapper">
    <img className="login-img" src={login} alt="login-image" />

    <div className="login-form">
      <form className="space-y-6" action="#">
        <h4 className="text-xl">The raccoon’s been busy!</h4>
        <p className="text-login">
          Log in to see how many hours you worked, how much you made, and when payday’s coming.
          
        </p>

        <h5>Sign in to UrshiftMate</h5>

        <div className="login-options">
          <div className="circle-logo">
            <a className="a-link-login-google" href={googleAuthUrl}>
              <img src={googleLogo} className="google-icon" alt="google" /> Continue with Google
            </a>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

  </>
  
  );
}

export default Login;
