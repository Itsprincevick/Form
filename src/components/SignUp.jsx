import React from "react";
import GoogleLogoIcon from "../assets/icons/Google.svg";
import ApplelogoIcon from "../assets/icons/apple_logo_icon.svg";
import FacebookLogoIcon from "../assets/icons/circle-facebook.svg";

function SignUp() {
  return (
    <div className="flex min-h-screen justify-center items-center  py-2">
      <div className="max-w-md w-full space-y-6">
        <div>
          <h2 className="mt-1 text-center text-4xl font-medium text-blue-10">
            Create an Account
          </h2>
          <p className="my-4 text-center text-sm text-gray-500">
            Bold underline draft ipsum background. Background plugin figja
          </p>
          <div className="w-full h-full bg-blue-1 rounded-lg p-1">
            <button className="w-1/2 text-center h-full">Sign In</button>
            <button className="w-1/2 text-center h-11 bg-white rounded-md">
              Sign Up
            </button>
          </div>
        </div>
        <form className="mt-2 space-y-2">
          <div className="flex flex-col">
            <label className="font-medium text-blue-950">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter Name here"
              className="my-1 p-3 border-grey-5 border rounded-lg"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium text-blue-950">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter Email Address here"
              className="my-1 p-3 border-grey-5 border rounded-lg"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium text-blue-950">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your Password"
              className="my-1 p-3 border-grey-5 border rounded-lg"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-blue-950">
              Confirm Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Confirm your Password"
              className="w-full my-1 p-3 border-grey-5 border rounded-lg"
              required
            />
          </div>
          <button className="btn  w-full my-4 font-medium px-20 py-2 border-2 border-spacing-0 border-blue-100 border-l-0 bg-blue-950 rounded-lg text-white">
            Sign Up
          </button>
          <div className="flex items-center justify-center my-4">
            <div className="border-t border-grey-3 flex-grow mr-3"></div>
            <p className="text-center text-grey-3">Or continue with</p>
            <div className="border-t border-grey-3 flex-grow ml-3"></div>
          </div>

          <div className="flex items-center justify-center gap-5">
            <img src={GoogleLogoIcon} alt="google logo" className="w-14 h-14" />

            <img src={ApplelogoIcon} alt="apple logo" className="w-14 h-14" />

            <img
              src={FacebookLogoIcon}
              alt="facebook logo"
              className="w-14 h-14"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
