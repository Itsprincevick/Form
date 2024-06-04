import GoogleLogoIcon from "../assets/icons/Google.svg";
import ApplelogoIcon from "../assets/icons/apple_logo_icon.svg";
import FacebookLogoIcon from "../assets/icons/circle-facebook.svg";
import { LockClosedIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
const SignIn = () => {
  return (
    <m.div className="h-screen w-1/2 flex items-center"
    initial={{opacity: 0.3}}
    animate={{opacity: 1}}
    exit={{opacity: 1}}
    transition={{duration: 1.5}}
    >
      <div className=" w-[65%] mx-auto">
        <h3 className=" space-y-56 text-blue-10 text-4xl text-center font-medium mt-8">
          Welcome Back
        </h3>
        <p className="text-sm text-center text-grey-4 mt-3">
          Bold Underline draft ipsum background.Backgroung plugin jsd
        </p>
        <div className="w-full h-[52px] bg-blue-1 rounded-lg p-1 mt-3">
            <Link to="/"><button className="w-1/2 text-center h-11 bg-white rounded-md">Sign In</button></Link>
            <Link to="/SignUp">
              <button className="w-1/2 text-center h-11">
                Sign Up
              </button>
            </Link>
          </div>
        <form className="mt-5">
          <label htmlFor="email" className="text-blue-10 font-semibold">
            Email Address
          </label>
          <input
            type="email"
            id="Email"
            name="Email"
            placeholder="Enter Email Address here"
            className="w-full border-2 border-grey rounded-xl px-3 py-2 mt-2 mb-2 outline-none"
            required
          />
          <label htmlFor="password" className="text-blue-10 font-semibold">
            Password
          </label>
          <div className="relative">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password"
              className="w-full border-2 border-grey rounded-xl px-3 py-2 mt-2 outline-none"
              required
            />
           <LockClosedIcon  className="absolute top-5 right-4 w-4 h-4 text-grey-3"/>
          </div>
          <div className="text-right text-green-6 mt-2 text-xs">
            <Link to="/ResetPassword">Forget Password?</Link>
          </div>
          <button
            type="submit"
            className="w-full border-2 rounded-xl px-3 py-3 mt-6 text-center bg-blue-10 text-white "
          >
            Sign In
          </button>
        </form>
        <div className="flex items-center justify-center my-4">
            <div className="border-t border-grey-3 flex-grow mr-3"></div>
            <p className="text-center text-grey-3">Or continue with</p>
            <div className="border-t border-grey-3 flex-grow ml-3"></div>
          </div>

          <div className="flex items-center justify-center gap-5">
            <img src={GoogleLogoIcon} alt="google logo" className="w-14 h-14 cursor-pointer" />

            <img src={ApplelogoIcon} alt="apple logo" className="w-14 h-14 cursor-pointer" />

            <img
              src={FacebookLogoIcon}
              alt="facebook logo"
              className="w-14 h-14 cursor-pointer"
            />
          </div>
      </div>
    </m.div>
  );
};

export default SignIn;
