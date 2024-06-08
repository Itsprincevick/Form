import GoogleLogoIcon from "../assets/icons/Google.svg";
import ApplelogoIcon from "../assets/icons/apple_logo_icon.svg";
import FacebookLogoIcon from "../assets/icons/circle-facebook.svg";
import { LockClosedIcon } from "@heroicons/react/16/solid";
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import AccessButtons from "../components/AccessButtons";
const SignIn = () => {
  return (
    <div className="h-screen md:w-1/2 flex items-center transition-opacity">
      <div className=" md:w-[65%] md:mx-auto">
        <m.div
          initial={{ y: "-20px" }}
          animate={{ y: "0" }}
          exit={{ y: "-20px" }}
          transition={{ duration: 1.5, type: "tween", ease: "easeInOut" }}
        >
          <h3 className=" space-y-56 text-blue-10 text-4xl text-center font-medium mt-8">
            Welcome Back
          </h3>
          <p className="text-sm text-center text-grey-4 my-4">
            Bold Underline draft ipsum background.Backgroung plugin jsd
          </p>
          <AccessButtons />
        </m.div>
        <form className="mt-5">
          <m.div
            initial={{ y: "-20px" }}
            animate={{ y: 0 }}
            exit={{ y: "-20px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
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
              <LockClosedIcon className="absolute top-5 right-4 w-4 h-4 text-grey-3" />
            </div>
            <div className="text-right text-green-6 mt-2 text-xs">
              <Link to="/ResetPassword">Forget Password?</Link>
            </div>
          </m.div>
        </form>
        <m.div
          initial={{ y: "20px" }}
          animate={{ y: "0px" }}
          exit={{ y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <button
            type="submit"
            className="w-full border-2 rounded-xl px-3 py-3 mt-6 text-center bg-blue-10 text-white "
          >
            Sign In
          </button>
          <div className="flex items-center justify-center my-4">
            <div className="border-t border-grey-3 flex-grow mr-3"></div>
            <p className="text-center text-grey-3">Or continue with</p>
            <div className="border-t border-grey-3 flex-grow ml-3"></div>
          </div>
          <div className="flex items-center justify-center gap-5">
            <img
              src={GoogleLogoIcon}
              alt="google logo"
              className="w-14 h-14 cursor-pointer"
            />
            <img
              src={ApplelogoIcon}
              alt="apple logo"
              className="w-14 h-14 cursor-pointer"
            />
            <img
              src={FacebookLogoIcon}
              alt="facebook logo"
              className="w-14 h-14 cursor-pointer"
            />
          </div>
        </m.div>
      </div>
    </div>
  );
};

export default SignIn;
